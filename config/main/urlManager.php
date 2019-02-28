<?php
/**
 * urlManager.php: Configuration for urlManager
*/
// use \yii\web\Request;
// $baseUrl = str_replace('/web', '', (new Request)->getBaseUrl());
// $baseUrl = (new Request)->getBaseUrl();

return [
	'enablePrettyUrl' => true,
    'showScriptName' => false,
    // 'baseUrl' => $baseUrl,
    'rules' => [
        // 'POST <controller:[\w-]+>s' => '<controller>/create',
        // '<controller:[\w-]+>s' => '<controller>/index',
        // 'PUT <controller:[\w-]+>/<id:\d+>'    => '<controller>/update',
        // 'DELETE <controller:[\w-]+>/<id:\d+>' => '<controller>/delete',
        // '<controller:[\w-]+>/<id:\d+>'        => '<controller>/view',
        'account_selection' => 'index/index',
        '<module:\w+><controller:\w+>/<id:\d+>'=>'<module><controller>/view',
        '<module:\w+><controller:\w+>/<action:\w+>/<id:\d+>'=>'<module><controller>/<action>',
        '<module:\w+>/<controller:\w+>/<action:\w+>'=>'<module>/<controller>/<action>',
        '<controller:\w+>/<id:\d+>'=>'<controller>/view',
        '<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
        '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
    ],
];