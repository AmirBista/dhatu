<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "a_user".
 *
 * @property int $user_id
 * @property string $user_name
 * @property string $password
 */
class AUser extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'a_user';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id'], 'required'],
            [['user_id'], 'default', 'value' => null],
            [['user_id'], 'integer'],
            [['user_name', 'password'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'user_id' => 'User ID',
            'user_name' => 'User Name',
            'password' => 'Password',
        ];
    }
}
