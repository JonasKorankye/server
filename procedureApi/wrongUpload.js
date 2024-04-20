const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.wrongUpload = async function (username){

    const [getUser,metadata2] = await dbCon.query('call wrongData(:username)',{
      replacements:{
          username : username
      },
      type: QueryTypes.SELECT,
      raw: true
    })
      
      return Object.values(getUser);
    }