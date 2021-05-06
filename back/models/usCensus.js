const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const sequelize = require('../db.js');

const usCensus = sequelize.define('usCensus', {
"age" : {
  type: DataTypes.INTEGER
},
"class of worker" : {
  type: DataTypes.STRING(1000)
},
"industry code" : {
  type: DataTypes.STRING(1000)
},
"occupation code" : {
  type: DataTypes.STRING(1000)
},
"education" : {
  type: DataTypes.STRING(1000)
},
"wage per hour" : {
  type: DataTypes.STRING(1000)
},
"last education" : {
  type: DataTypes.STRING(1000)
},
"marital status" : {
  type: DataTypes.STRING(1000)
},
"major industry code" : {
  type: DataTypes.STRING(1000)
},
"major occupation code" : {
  type: DataTypes.STRING(1000)
},
"mace" : {
  type: DataTypes.STRING(1000)
},
"hispanice" : {
  type: DataTypes.STRING(1000)
},
"sex" : {
  type: DataTypes.STRING(1000)
},
"member of labor" : {
  type: DataTypes.STRING(1000)
},
"reason for unemployment" : {
  type: DataTypes.STRING(1000)
},
"fulltime" : {
  type: DataTypes.STRING(1000)
},
"capital gain" : {
  type: DataTypes.STRING(1000)
},
"capital loss" : {
  type: DataTypes.STRING(1000)
},
"dividends" : {
  type: DataTypes.STRING(1000)
},
"income tax liability" : {
  type: DataTypes.STRING(1000)
},
"previous residence region" : {
  type: DataTypes.STRING(1000)
},
"previous residence state" : {
  type: DataTypes.STRING(1000)
},
"household-with-family" : {
  type: DataTypes.STRING(1000)
},
"household-simple" : {
  type: DataTypes.STRING(1000)
},
"weight" : {
  type: DataTypes.STRING(1000)
},
"msa-change" : {
  type: DataTypes.STRING(1000)
},
"reg-change" : {
  type: DataTypes.STRING(1000)
},
"within-reg-change" : {
  type: DataTypes.STRING(1000)
},
"lived-here" : {
  type: DataTypes.STRING(1000)
},
"migration prev res in sunbelt" : {
  type: DataTypes.STRING(1000)
},
"num persons worked for employer" : {
  type: DataTypes.STRING(1000)
},
"family members under 118" : {
  type: DataTypes.STRING(1000)
},
"father birth country" : {
  type: DataTypes.STRING(1000)
},
"mother birth country" : {
  type: DataTypes.STRING(1000)
},
"birth country" : {
  type: DataTypes.STRING(1000)
},
"citizenship" : {
  type: DataTypes.STRING(1000)
},
"own business or self employed" : {
  type: DataTypes.STRING(1000)
},
"fill questionnaire for veteran's admin" : {
  type: DataTypes.STRING(1000)
},
"veterans benefits" : {
  type: DataTypes.STRING(1000)
},
"weeks worked in year" : {
  type: DataTypes.STRING(1000)
},
"year" : {
  type: DataTypes.STRING(1000)
},
"salary range" : {
  type: DataTypes.STRING(1000)
}
}
  , {
    tableName: 'census_learn_sql',
    timestamps: false
  });

usCensus.removeAttribute('id');

module.exports = usCensus;
