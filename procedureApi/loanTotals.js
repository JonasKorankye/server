const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;


module.exports.loanTotals = async function () {


    const total = await dbCon.query('call loanTotals()',{
      replacements:{
      },
      type: QueryTypes.CALL,
      raw: true
    })

    return total;
};
