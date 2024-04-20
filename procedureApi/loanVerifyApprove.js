const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.loanVerifyApprove = async function (uuid,username, notes, referMsg, referedBy, transType){

  const [getloan,metadata2] = await dbCon.query('call loanVerifyApprove(:uuid, :username, :notes, :referMsg, :referedBy, :transType)',{
    replacements:{
      uuid: uuid,
      username: username, 
      notes: notes, 
      referMsg: referMsg, 
      referedBy: referedBy, 
      transType: transType
        },
    type: QueryTypes.SELECT,
    raw: true
  })

    return getloan[0];
    }