const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;


module.exports.glDropdown = async function () {
  const result = await dbCon.query(
            `SELECT accountNumber value,accountName name FROM tb_gledgers WHERE accountStatus = 'NORMAL';`,
      {
            type: QueryTypes.SELECT,
            raw: true,
      }
  );

  return result;
};
