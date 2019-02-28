<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\AUser;

/**
 * CitysSearch represents the model behind the search form about `app\models\Citys`.
 */
class CitysSearch extends AUser
{
	public $globalSearch;
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id'], 'integer'],
            [['user_id', 'user_name'], 'safe'],
            // [['city', 'city_ascii', 'county_id', 'globalSearch','state', 'countys.state_id'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios(); 
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = AUser::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $query->andFilterWhere([
            'user_id' => $this->user_id,
			// 'city' => $this->city,
			// 'city_ascii' => $this->city_ascii,
			// 'county_id' => $this->county_id,
			// 'countys.state_id' => $this->state,
        ]);
		
		// $query->joinWith('countys');
		
        //$query->joinWith(['countys' => function ($q) {$q-> where ('uscitiesv_countys.id = uscitysv_citys.county_id' ) ;}]) ;
		//$query->joinWith(['countys' => function ($q) {$q-> where ('uscitiesv_countys.state_id = ' . $this->state ) ;}]) ;
		//if (strlen($this->state_id)) {
			//$query->joinWith(['countys' => function ($q) {$q-> where ('uscitiesv_countys.state_id = ' . $this->state ) ;}]) ;
		//}	

		if (!($this->load($params) && $this->validate())) {
			return $dataProvider;
		}

        // grid filtering conditions
        /*
		$query->andFilterWhere([
            'user_id' => $this->user_id,
            //'county_id' => $this->county_id,
        ]);
		*/

		if (strlen($this->globalSearch)) {
			$this->globalSearch = trim($this->globalSearch);
			$query->orFilterWhere(['like', 'user_id', $this->globalSearch])
				->orFilterWhere(['like', 'user_name', $this->globalSearch]);
		} else {
			$query->andFilterWhere(['like', 'user_id', $this->user_id])
				->andFilterWhere(['like', 'user_name', $this->user_name]);
		}
		
        return $dataProvider;
    }
}
