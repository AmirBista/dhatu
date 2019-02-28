<?php
require __DIR__ . '/../constants.php';

// comment out the following two lines when deployed to production
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV_DEV') or define('YII_ENV_DEV', true);
defined('YII_ENV') or define('YII_ENV', 'dev');
$globals   = dirname(__FILE__) . '/../config/globals.php';

require_once($globals);
// require __DIR__ . '/../vendor/autoload.php';
// require __DIR__ . '/../vendor/yiisoft/yii2/Yii.php';
require 'D:/wamp/www/frameworks/YII2-FRAMEWORK/Yii-2.0.14/vendor/autoload.php';
require 'D:/wamp/www/frameworks/YII2-FRAMEWORK/Yii-2.0.14/vendor/yiisoft/yii2/Yii.php';


$config = require __DIR__ . '/../config/web.php';
(new yii\web\Application($config))->run();
