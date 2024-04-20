const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.terminateApproval = async function (transactionId){

    const [payment,metadata2] = await dbCon.query('call paymentApproval(:transactionId)',{
      replacements:{
        transactionId : transactionId
      },
      type: QueryTypes.SELECT,
      raw: true
    })
      
      return Object.values(payment);
    }