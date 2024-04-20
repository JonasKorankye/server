const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.loanAppGet = async function (customerNumber){

    const [getUser,metadata2] = await dbCon.query('call loanAppGet(:customerNumber)', {
        replacements:{
            customerNumber: customerNumber
        },
        type: QueryTypes.SELECT,
        raw: true
      })

    return getUser[0];
    }