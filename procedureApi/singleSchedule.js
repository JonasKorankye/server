const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize


module.exports.singleSchedule = async function (loanAmount,interestRate, loanPeriod){
  try {
  const [getSchedule,metadata2] = await dbCon.query('call Sp_GetEmi(:loanAmount,:interestRate, :loanPeriod)',{
      replacements:{
        loanAmount: loanAmount,
        interestRate: interestRate, 
        loanPeriod: loanPeriod
      },
      type: QueryTypes.SELECT,
      raw: true
    })

  return {values: Object.values(getSchedule),
        responsecode: "00", 
        response:"Loan schedule generated succeefully" };
  } catch (error) {
    return {responsecode: "99" , response:"Error generating schedule", error};
  }
}