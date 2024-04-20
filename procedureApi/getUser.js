const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;
const Users = require("../models/Users")(sequelize, DataTypes);
const Branch = require("../models/branch")(sequelize, DataTypes);

module.exports.getUser = async function (username) {
  const user = await Users.findOne({ where: { username: username } });
  if (user) {
    user.appStatus = !user.appStatus === "Y" ? "YES" : "NO";
    user.gender = !user?.gender === "M" ? "MALE" : "FEMALE";
    user.userType = !user?.userType === "B" ? "BRANCH USER" : "GLOBAL USER";
    user.issuspend = !user.issuspend === "Y" ? "BLOCKED" : "UNBLOCKED";

  
    const branch = await Branch.findOne({ where: { branchCode: user.branch } });
    user.branch = branch?.branchName;
  }

  return user;
};
