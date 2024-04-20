const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.customerGet = async function (customerNumber){

    const [getUser,metadata2] = await dbCon.query(`SELECT title, cc.customerNumber, UPPER(customerName) customerName, firstname , lastname , middleName , branchCode , customerType,gender,nationalId, address, 
    idExpiryDate,phoneNumber, email, postedPerson , marital, empId, idExpiryDate, profession, customerStatus, blacklist, appStatus, nationalIdFront, nationalIdBack
    FROM TB_CUSTOMERS cc 
    LEFT JOIN tb_imageloans m ON m.customerNumber = cc.customerNumber
    WHERE cc.customerNumber = :customerNumber and not exists (select customerNumber from tb_customerunapproveds ck where cc.customerNumber = ck.customerNumber)
    UNION 
    SELECT title, cc.customerNumber, UPPER(customerName) customerName , firstname , lastname , middleName , branchCode , customerType,gender,nationalId, address,
     idExpiryDate,phoneNumber, email, postedPerson , marital, empId, idExpiryDate, profession, customerStatus, blacklist, appStatus, nationalIdFront, nationalIdBack
    FROM tb_customerunapproveds cc
    LEFT JOIN tb_imageloans m ON m.customerNumber = cc.customerNumber
    WHERE cc.customerNumber = :customerNumber`, {
        replacements:{
            customerNumber: customerNumber,
            _customerNumber: customerNumber,
        },
        type: QueryTypes.SELECT,
        raw: true
      })
    
    return getUser;
    }