const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize






module.exports.customerCreate = async function (firstName,lastName,middleName,email,phoneNumber,gender,empId,customerType,
  nationalId,branchCode,profession,address,customerStatus, idExpiryDate, blacklist, marital, title, username){
      const customerNumber_ = Math.floor(Math.random() * (99999 - 10000) + 10000).toString() + branchCode

    const [getUser,metadata2] = await dbCon.query(`call customerCreate(:customerNumber, :customerName , :firstname , :lastname , :middleName , :branchCode , :customerType ,
      :gender , :nationalId, :profession , :address, :idExpiryDate, :phoneNumber, :email, :postedPerson ,
      :empId , :customerStatus, :blacklist, :marital, :title)`,{
        replacements:{
            customerNumber: customerNumber_,
            customerName: (`${firstName} ${middleName} ${lastName}`),
            firstname: firstName,
            lastname: lastName,
            middleName: middleName,
            email : email,
            phoneNumber : phoneNumber,
            gender : gender,
            empId : empId,
            customerType : customerType,
            nationalId : nationalId,
            branchCode : branchCode,
            profession : profession,
            address : address,
            idExpiryDate : idExpiryDate,
            customerStatus: customerStatus,
            blacklist:  blacklist,
            postedPerson: username,
            title: title,
            marital: marital,
        },
        type: QueryTypes.SELECT,
        raw: true
      })
    const responsecode = getUser[0].responseCode
    const response = getUser[0].response

  

    return {"responsecode": responsecode , "response":response, customerNumber: customerNumber_};
    }