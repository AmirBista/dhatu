<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;

class PrivateController extends \yii\web\Controller
{
    protected $_post_only = ['status-toggle'];
    
    public function __construct($id, $module , $config=[]){
        parent::__construct($id, $module , $config);
        $this->layout = "ybase";
    }

    /** 
     * {@inheritdoc} 
     */ 
    public function behaviors() 
    { 
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => $this->_post_only,
                'rules' => [
                    // allow all POST requests
                    [
                        'allow' => true,
                        'verbs' => ['POST']
                    ],
                    /*// allow authenticated users
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],*/
                    // everything else is denied
                ],
            ],
            [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'ips' => ['*'], // ['*'] || ['127.0.0.1','127.0.0.2'] || ['>127.0.0.0'] || ['<127.0.0.5'] || ['127.0.0.1-127.0.0.5']
                    ],
                ],
            ],
        ]; 
   }


    public function beforeAction($action)
    {
        if (!parent::beforeAction($action)) {
	        return false;
	    }

    	if (Yii::$app->user->isGuest) {
    		return $this->redirect(Yii::$app->user->loginUrl)->send();
        }

    	return true; // or false to not run the action
    }
}
