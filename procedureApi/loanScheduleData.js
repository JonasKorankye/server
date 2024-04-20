const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.loanScheduleData = async function (loanAccount){

    const [getUser,metadata2] = await dbCon.query(`SELECT  * FROM tb_schedules WHERE loanAccount = :loanAccount `, {
        replacements:{
          loanAccount: loanAccount
        },
        type: QueryTypes.SELECT,
        raw: true
      })
    
    return getUser;
    }