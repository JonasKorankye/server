const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.loanVerifyApp = async function (uuid){

  const [getloan,metadata2] = await dbCon.query('call loanVerifyGet(:uuid)',{
    replacements:{
      uuid: uuid
        },
    type: QueryTypes.SELECT,
    raw: true
  })

  
    return getloan;
    }