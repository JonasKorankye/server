const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;
const Reschedule = require("../models/Reschedule")(sequelize, DataTypes);

module.exports.schedule = async function (loanAmount, interestRate, loanPeriod, StartPaymentDate, loanAccount, type)
{
  try {
    if (type === "C") {
        await Reschedule.destroy({
          where: {
            loanAccount: loanAccount,
          },
        });
        return {
          responsecode: "00",
          response: "Reschedule declined successfully",
        };
    } else if (type === "S") {
        const [getSchedule, metadata2] = await dbCon.query(
          "call Schedule(:loanAmount,:interestRate, :loanPeriod,:StartPaymentDate, :loanAccount, :type)",
          {
            replacements: {
              loanAmount: loanAmount,
              interestRate: interestRate,
              loanPeriod: loanPeriod,
              StartPaymentDate: StartPaymentDate,
              loanAccount: "",
              type: type,
            },
            type: QueryTypes.SELECT,
            raw: true,
          }
        );

        return {
          values: Object.values(getSchedule),
          responsecode: "00",
          response: "Loan schedule generated succeefully",
        };
    } else {
         await dbCon.query('call Schedule(:loanAmount,:interestRate, :loanPeriod,:StartPaymentDate, :loanAccount, :type)',
          {
            replacements: {
              loanAmount: loanAmount,
              interestRate: interestRate,
              loanPeriod: loanPeriod,
              StartPaymentDate: StartPaymentDate,
              loanAccount: loanAccount,
              type: type,
            },
            type: QueryTypes.SELECT,
            raw: true,
          }
        );

        return {
          responsecode: "00",
          response: "Loan Reschedule succeefully approved",
        };
    }
  } catch (error) {
    return { responsecode: "99", response: "Error generating schedule", error };
  }
};
