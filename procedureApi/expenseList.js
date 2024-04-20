const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;
const Expense = require('../models/Expense.js')(sequelize, DataTypes)


module.exports.expenseList = async function () {
                  const result = await Expense.findAll({
                    replacements: {
                    },
                    order: [
                      ['createdAt', 'DESC'],
                      ['expenseDesc', 'ASC'],
                  ],
                    raw: true
                })

                result.statusId = result.status === 'Y' ? 'YES': 'NO'

                return result;
};
