const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;


module.exports.expenseAdd = async function (expenseDesc,accountNumber, postedPerson, status, type, uuid) {


    const expense = await dbCon.query('call expenseAdd(:expenseDesc, :accountNumber, :postedPerson, :status, :type, :uuid)',{
      replacements:{
        expenseDesc: expenseDesc, 
        accountNumber: accountNumber, 
        postedPerson: postedPerson,
        status: status,
        type: type,
        uuid: uuid
      },
      type: QueryTypes.CALL,
      raw: true
    })

                  return {responseCode: expense[0].responseCode, response: expense[0].response};
};
