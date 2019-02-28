<?php

namespace app\controllers;

use Yii;
use app\models\LoginForm as LoginForm;
use app\models\AppUser;
use app\models\User;
use app\models\Client;
use yii\helpers\Json;
use yii\helpers\Url;

class AuthController extends \yii\web\Controller
{
    public function beforeAction( $action ) {
        if ( parent::beforeAction ( $action ) ) {
    
             //change layout for error action after 
             //checking for the error action name 
             //so that the layout is set for errors only
            if ( $action->id == 'error' ) {
                $this->layout = 'error';
            }
            return true;
        } 
    }
    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function actionIndex()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $this->layout = "login";

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }

        $model->password = '';
        return $this->render('index', [
            'model' => $model,
        ]);
    }
    
   public function actionForgotPassword() {
        $email  = Yii::$app->request->post('email','');

        if(empty($email)){
            return $this->asJson(['success' => FALSE,'data' => Yii::t('user','Email Field Blank')]);
        }
        else if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE){
            return $this->asJson(['success' => FALSE,'data' => Yii::t('user','Invalid Email Format')]);
        }
        else{
            try{
                $user = Client::findOne(['email' => $email,'delete_flg'=>0]);
                if(empty($user)){
                    return $this->asJson(['success' => FALSE,'data' => Yii::t('user','Invalid Email')]);
                }
                else{
                    $reset_link = $this->_setForgotPasswordToken($email);

                    $mail_params = [
                        'first_name'         => $user['client_name_en'],
                        // 'last_name'          => $user['last_name'],
                        'mail_to'            => $email,
                        'mail_from'          => Yii::$app->params['adminEmail'],
                        'mail_template_view' => '//mail_template/forgot_pwd_mail_template',
                        'temp_data_key'      => 'forgotPwdTemp',
                        'reset_link'         => $reset_link,
                        'mail_subject'       => Yii::t('mailTemp','forgotPasswordRequest')
                    ];

                    $response = $this->sendMail($mail_params);
                    return $this->asJson($response);
                }
            }
            catch(Exception $e){
                return $this->asJson(['success' => FALSE,'data' => $e->getMessage()]);
            }
        }
    }

    private function _setForgotPasswordToken($email){
        $date = date('Y-m-d H:i:s');
        $token = md5($email.date('YmdHis'));
        $forgotPwdToken = new \app\models\ForgotPasswordToken;
        $forgotPwdToken->token = $token;
        $forgotPwdToken->email = $email;
        $forgotPwdToken->is_locked = 0;
        $forgotPwdToken->expiry_date = date('Y-m-d H:i:s', strtotime($date. ' + 1 days'));
        $forgotPwdToken->save();
        $reset_link = Url::base('https').'/auth/reset-password?email='.$email.'&token='.$token;
        return $reset_link;
    }

    public function actionResetPassword(){
        $email = Yii::$app->request->get('email','');
        $token = Yii::$app->request->get('token','');
        if(empty($email) || empty($token)){
            throw new \yii\web\HttpException(400,t('user','Invalid Credentials'));
        }
        else if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE){
            throw new \yii\web\HttpException(400,t('user','Invalid Email Format'));
        }
        else{
            $transaction = Yii::$app->db->beginTransaction();
            try{
                $forgotPasswordToken = \app\models\ForgotPasswordToken::find()
                                        ->where(['email'=>$email,'token'=>$token,'is_locked'=>0])
                                        ->andWhere("expiry_date >=:expiry_date", [':expiry_date' => date('Y-m-d H:i:s')])
                                        ->one();
                if(empty($forgotPasswordToken)){
                    throw new \yii\web\HttpException(400,Yii::t('user','Invalid Credentials'));
                }
                else{
                    $forgotPasswordToken->is_locked = 1;
                    $forgotPasswordToken->locked_datetime = date('Y-m-d H:i:s');
                    $forgotPasswordToken->user_agent = $_SERVER['HTTP_USER_AGENT'];
                    $forgotPasswordToken->ip = $_SERVER['SERVER_ADDR'];
                    $forgotPasswordToken->update();

                    $user = Client::findOne(['email'=>$email,'delete_flg' => 0]);
                    if(empty($user)){
                    throw new \yii\web\HttpException(400,Yii::t('user','Invalid Email'));
                    }
                    $user->isNewRecord= FALSE;
                    $new_pwd  = mt_rand(100000,999999);
                    $save = Client::updateUser($new_pwd,$user['id']);

                    // $userLang = empty($user->language) ? 'ja' : $user->language;

                    $mail_params = array(
                        'first_name'         => $user['client_name_en'],
                        // 'last_name'          => $user['last_name'],
                        'username'           => $user['username'],
                        'user_code'          => $user['client_code'],
                        'new_password'       => $new_pwd, 
                        'mail_to'            => $email,
                        'email'              => $email,
                        'mail_from'          => Yii::$app->params['adminEmail'],
                        'mail_template_view' => '//mail_template/reset_pwd_mail_template_en'/*.$userLang*/,
                        'temp_data_key'      => 'resetPwdTemp',
                        'mail_subject'       => Yii::t('mailTemp','resetPassword'),
                        'bcc'                => '',
                        'cc'                 => '',
                    );
                    $response = $this->sendMail($mail_params);
                    // $cookie = new CHttpCookie('resetPwdSuccess','Your new password has beeen sent to your email.Please check your email.');
                    // Yii::$app->request->cookies['resetPwdSuccess'] = $cookie;
                    $transaction->commit();
                    $this->redirect(getMainUrl(false));
                    // $this->renderJSON($response);
                }
            }
            catch(Exception $e){
                if($transaction)
                    $transaction->rollback();
                throw new \yii\web\HttpException(500,   $e->getMessage());

            }
        }
    }

    protected function sendMail($mail_params){
        $sender_email       = Yii::$app->params['adminEmail'];
        $sender_email_name  = Yii::$app->params['adminEmailName'];
        $mail_subject       = $mail_params['mail_subject'];
        $temp_data      =  Yii::t('mailTemp',$mail_params['temp_data_key']);
        $templateBody = $this->renderPartial($mail_params['mail_template_view'], [
                'data'      => $mail_params,
                'temp_data' => $temp_data
            ],true);
        $mail = Yii::$app->mailer->compose()
                    ->setFrom([$sender_email => $sender_email_name])
                    ->setTo($mail_params['mail_to'])
                    ->setSubject($mail_subject)
                    // ->setTextBody('Plain text content. YII2 Application')
                    ->setHtmlBody($templateBody);
        if($mail->send()){
            $response= [
                'success'=>true,
                'data'=>Yii::t('general','mail_sucess')
            ];
        }
        else{
            $response= [
                'success'=>false,
                'data'=>t('general','empty_client_data')
            ];
        }
        return $response;
    }

    /**
     * Logout action.
     *
     * @return Response
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();
        return $this->asJson([
            'success' => TRUE
        ]);
        // return $this->goHome();
    }
}
