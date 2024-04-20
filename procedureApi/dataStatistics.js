const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.dataStatistics = async function (branchCode){

  const [getData,metadata2] = await dbCon.query('call totalDataStatistics(:branchCode)',{
    replacements:{
        branchCode: branchCode
    },
    type: QueryTypes.SELECT,
    raw: true
  })
    
    return getData;
    }