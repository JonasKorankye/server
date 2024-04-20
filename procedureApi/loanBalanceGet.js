const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.loanBalanceGet = async function (loanAccount){

  const [getloan,metadata2] = await dbCon.query('call loanBalanceGet(:loanAccount)',{
    replacements:{
      loanAccount: loanAccount
    },
    type: QueryTypes.SELECT,
    raw: true
  })
    
    return getloan;
    }