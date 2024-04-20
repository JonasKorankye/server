const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize





module.exports.loanCreate = async function (accountNumber,customerNumber, loanType, loanAmount, tenor, interest, paymentPlan, effectiveDate, interestType, loanPurpose,
                                                securityType, securityValue, guarantor, guarantorPhone, guarantorId, branchCode, processfee, insurance, username, schedule){
    const [getUser,metadata2] = await dbCon.query(`call loanCreate(:accountNumber,:customerNumber, :loanType, :loanAmount, :tenor, :interest, :paymentPlan, :effectiveDate, :interestType, :loanPurpose
        ,:securityType, :securityValue, :guarantor, :guarantorPhone, :guarantorId, :branchCode, :processfee, :insurance, :username, :schedule)`,{
        replacements:{
            accountNumber: accountNumber,
            customerNumber: customerNumber, 
            loanType: loanType, 
            loanAmount: loanAmount, 
            tenor: tenor, 
            interest: interest, 
            paymentPlan: paymentPlan, 
            effectiveDate: effectiveDate, 
            interestType: interestType, 
            loanPurpose: loanPurpose,
            securityType: securityType, 
            securityValue: securityValue,
            guarantor: guarantor, 
            guarantorPhone: guarantorPhone, 
            guarantorId: guarantorId,
            branchCode: branchCode,
            processfee: processfee,
            insurance: insurance,
            username: username,
            schedule: schedule,
        },
        type: QueryTypes.SELECT,
        raw: true
      })
    const responsecode = getUser[0].responseCode
    const response = getUser[0].response
    
    return {"responsecode": responsecode , "response":response};
    }