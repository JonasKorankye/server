const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.rescheduleList = async function (){

  const [getloan,metadata2] = await dbCon.query('call rescheduleList()',{
    replacements:{
    },
    type: QueryTypes.SELECT,
    raw: true
  })

    
    return Object.values(getloan);
    }