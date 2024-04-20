const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;

module.exports.glEnquiry = async function (accountNumber) {
  const result = await dbCon.query( `SELECT chartGroup, accountNumber, accountName, CASE WHEN global = 'Y' THEN 'YES' ELSE 'NO' END globalId, 
                                    branchDesc(branchCode) branchName, accountProd, accountStatus
                                    FROM tb_gledgers;`,
    {
      type: QueryTypes.SELECT,
      raw: true
    }
  );

  return result;
};
