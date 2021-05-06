const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
var bodyParser = require('body-parser')
const usCensus = require('./models/usCensus')
const sequelize = require('./db.js');

app.use(cors());

const getColumns = () => {
  let columns = [];
  for( let key in usCensus.rawAttributes ){
    columns.push(key);
  }
  return columns;
}

const getRowsData = async (column) => {
    const [result, metadata] = await sequelize.query( "SELECT `" +column+ "` AS `variableName`, ROUND(AVG(`age`)) AS `avgAge`, COUNT (`" +column+ "`) AS `occurence` FROM 'census_learn_sql' WHERE `" +column+ "` IS NOT NULL GROUP BY `" +column+ "` ORDER BY COUNT(`" +column+ "`) DESC LIMIT 100 ");
  return result;
}

async function init() {
  await usCensus.sync();

  app.get('/columns', (req, res) => {
    const columns = getColumns();
    res.send(columns);
  })

  app.get('/rows', async (req, res) => {
    const {column} = req.query;
    const columns = getColumns();
    if (!columns.includes(column)) {
      return res.status(400).send({ message: 'error in column name!' });
    }
    const rowsData = await getRowsData(column);
    res.send(rowsData);
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

init();
