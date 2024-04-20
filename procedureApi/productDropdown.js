const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize



module.exports.productDropdown = async function (){

      const result = await dbCon.query(
            `SELECT proCode value,productName name FROM product_setups;`,
      {
            type: QueryTypes.SELECT,
            raw: true,
      }
  );

  return result;

}