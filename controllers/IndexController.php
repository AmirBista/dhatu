<?php

namespace app\controllers;


class IndexController extends PrivateController
{
    public function actionIndex()
    {
        return $this->render('index');
    }

}
