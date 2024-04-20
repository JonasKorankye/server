const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;


module.exports.expenseDropdown = async function () {
  const result = await dbCon.query(
            `SELECT uuid value,expenseDesc name FROM tb_expenses WHERE status = 'Y';`,
      {
            type: QueryTypes.SELECT,
            raw: true,
      }
  );

  return result;
};
