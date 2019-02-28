<?php

/* @var $this \yii\web\View */
/* @var $content string */
use app\widgets\Alert;
use yii\helpers\Html;
use app\assets\LoginAsset;

$assets = LoginAsset::register($this);
$faviconPath = $assets->baseUrl . '/favicon.ico';
$logoPath = $assets->baseUrl . '/images/login/logo1.png';
$this->title = ' Login | '.DEFAULT_APP_NAME;
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" class="login">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?= $this->registerLinkTag(['rel' => 'icon', 'type' => 'image/png', 'href' => $faviconPath]); ?>
    
    <?php $this->head() ?>
    <?php $this->registerJsFile('@web/js/jquery.min.js',
    ['position' => \yii\web\View::POS_HEAD]); ?>
    <script type="text/javascript">
        //disable shortcuts to developers options
        $(document).keydown(function (event) {
            if (event.keyCode == 123) { // Prevent F12
                return <?php echo json_encode(ENABLE_DEBUG_CONSOLE); ?>;
            } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
                return <?php echo json_encode(ENABLE_DEBUG_CONSOLE); ?>;
            } else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) { // Prevent Ctrl+Shift+J        
                return <?php echo json_encode(ENABLE_DEBUG_CONSOLE); ?>;
            }
        });
    </script>
</head>
<body oncontextmenu="return <?php echo json_encode(ENABLE_DEBUG_CONSOLE); ?>;">
<?php $this->beginBody() ?>
    <div class="login-container">
	    <div class="login-form-wrapper">
        	<?= $content ?>
        </div>
    </div>
<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>
