<?php
/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\LoginForm */

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
use yii\bootstrap\Modal;

$logoPath = getMainUrl(false) . '/images/orbit.svg';
?>
        <?php $form = ActiveForm::begin([
            'id' => 'login-form',
            'layout' => 'horizontal',
            'options' => ['class' => 'login-form validate-form', "autocomplete"=>"off"],
            'fieldConfig' => [
                'template' => " <div class=\"type-fields\">{label}\n{input}\n{error}\n</div>",
                'labelOptions' => ['class' => 'control-label'],
            ]
        ]); ?>
        <div class="logo-block"><img src="<?= $logoPath; ?>" alt="Logo" class="svg"></div>
        <?= $form->field($model, 'username', [
                'template' => " <div class=\"type-fields\"><label class=\"control-label\">Username</label>\n{input}\n{error}\n</div>",
            ])->textInput(['autofocus' => false, "autocomplete" => "off"]) ?>

        <?= $form->field($model, 'password',[
                'template' => " <div class=\"type-fields\"><label class=\"control-label\">Password</label>\n{input}\n{error}\n</div>",
            ])->passwordInput(["autocomplete" => "new-password"]) ?>

        <?= $form->field($model, 'rememberMe')->checkbox([
            'template' => "{input} {label}\n{error}",
        ]) ?>
        <label class="forgot-pwd"><a href="javascript:void(0)" id= 'modalBtn' class="text-danger">Forgot Password</a></label>
        <div class="clearfix"></div>
        <?= Html::submitButton('Login', ['class' => 'btn btn-success', 'name' => 'login-button']) ?>
        <!-- <label class="new-registration">New User?? <a href="#" class="text-primary">Register Here</a></label> -->
        <?php ActiveForm::end(); ?>
        
    </div>
</div>

    <?php
        Modal::begin([
            'header' => "<div>Reset Password</div>",
            'id' => 'modal',
            'size' => '',
            // 'footer' => '<div class="form-group">
            //             <button id="reset-pwd" type="submit" class="btn btn-success"  >Reset</button> 
            //          </div>'
        ]);
        
       /* echo $form->field($model, 'email')->input('email');
        echo Html::tag('p', '', ['class' => 'email-message']);
        echo Html::submitButton('Reset', ['class' => 'btn btn-success','id'=>'reset-pwd']);*/
        //ActiveForm::End();
        /*Modal::end();*/
    ?>


<?php
$script = <<< JS
    $(function() {
        $('#modalBtn').click(function (e) {
            $('#modal').modal('show');
            $('#adminloginform-email').val(''),
            $('.email-message').text('');
                // .find('.modalContent')
                //.load($(this).attr('value'));
                
        });
    });
    jQuery('#reset-pwd').click(function(e) {
        var emailFld = $('#adminloginform-email'),
            email = emailFld.val();
        if(email === ''){
            emailFld.addClass('redbg');
            
        }
        else{
            emailFld.removeClass('redbg');
            $.ajax({
                url : 'auth/forgot-password',
                data: {email: email},
                method : 'post',
                dataType : 'json',
                success : function(response) {
                    if(response.success){
                        // $("#modal").modal('hide');   
                        $('#adminloginform-email').val('');   
                    }
                    $('.email-message').text(response.message);
                },
            });
        }
        
    });

JS;
$this->registerJs($script);
?>

