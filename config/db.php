<?php

return [
   'class' => 'yii\db\Connection',
    'dsn' => 'pgsql:host='.DB_HOST.';dbname='.DB_NAME.';port='.DB_PORT,
    'username' => DB_USER,
    'password' => DB_PASS,
    'charset' => DB_CHARSET,
    'schemaMap' => [
        'pgsql' => [
          'class' => 'yii\db\pgsql\Schema',
          'defaultSchema' => 'public' //specify your schema here, public is the default schema
        ]
    ], 
    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => DB_SCHEMACACHING_DURATION,
    //'schemaCache' => 'cache',
];
