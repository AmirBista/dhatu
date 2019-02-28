<?php
return [
    'app*' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'app.php',
            'app/error' => 'error.php',
        ],
    ],
    'general' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'general.php',
            'general/error' => 'error.php',
        ],
    ],
    'user' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'user.php',
            'user/error' => 'error.php',
        ],
    ],
    'company' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'company.php',
            'company/error' => 'error.php',
        ],
    ],
    'tblSchema' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'tblSchema.php',
            'tblSchema/error' => 'error.php',
        ],
    ],
    'csv' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'csv.php',
            'csv/error' => 'error.php',
        ],
    ],
    'fileupload' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'fileupload.php',
            'fileupload/error' => 'error.php',
        ],
    ],
    'mailTemp' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'mailTemp.php',
            'mail/error' => 'error.php',
        ],
    ],
    'entryPanel' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'entryPanel.php',
            'entryPanel/error' => 'error.php',
        ],
    ],
    'datagridTemplateHelper' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'datagridTemplateHelper.php',
            'datagridTemplateHelper/error' => 'error.php',
        ],
    ],
    'filebox' => [
        'class' => 'yii\i18n\PhpMessageSource',
        'basePath' => '@app/messages',
        'fileMap' => [
            'app' => 'filebox.php',
            'filebox/error' => 'error.php',
        ],
    ],
];
?>