const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.batchApproval = async function (username){

    const [batch,metadata2] = await dbCon.query('call batchPaymentApproval(:username)',{
      replacements:{
          username : username
      },
      type: QueryTypes.SELECT,
      raw: true
    })
      
      return Object.values(batch);
    }