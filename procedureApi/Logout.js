const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize

module.exports.logOut = async function (username){
const [getLogOut,metadata2] = await dbCon.query('call logout(:username)',{
    replacements:{
        username : username
    },
    type: QueryTypes.SELECT,
    raw: true
  })

const responsecode = getLogOut[0].responseCode
const response = getLogOut[0].response

return {"responsecode": responsecode , "response":response};
}