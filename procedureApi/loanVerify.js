const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.loanVerify = async function (braCode, username, userType){

    const [getloan,metadata2] = await dbCon.query('call loanVerify(:braCode, :username, :userType)',{
        replacements:{
          braCode: braCode,
          username: username,
          userType: userType
        },
        type: QueryTypes.SELECT,
        raw: true
      })

    
    return Object.values(getloan);
    }