const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.loanCustomerGet = async function (customerNumber){

    const [getUser,metadata2] = await dbCon.query(`
    SELECT title, customerNumber, UPPER(customerName) customerName , firstname , lastname , middleName , branchCode , customerType,gender,nationalId, address,
     idExpiryDate,phoneNumber, email, postedPerson , marital, empId, idExpiryDate, profession, customerStatus, blacklist, appStatus
    FROM tb_customers WHERE customerNumber = :customerNumber `, {
        replacements:{
            customerNumber: customerNumber
        },
        type: QueryTypes.SELECT,
        raw: true
      })
    
    return getUser;
    }