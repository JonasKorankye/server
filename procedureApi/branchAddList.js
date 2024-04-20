const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.branchAddList = async function (statusId, branchStatus, branchCode){

  const [branch,metadata2] = await dbCon.query('call branchAddList(:statusId, :branchStatus, :branchCode)',{
    replacements:{
      statusId: statusId, 
      branchStatus: branchStatus, 
      branchCode: branchCode
    },
    type: QueryTypes.SELECT,
    raw: true
  })

  if(statusId === 'list')
    return Object.values(branch);
  else
  return {"responsecode": branch[0].responseCode,  "response": branch[0].response};
  }