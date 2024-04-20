const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.loanAccountGet = async function (loanAccount){

    const [getUser,metadata2] = await dbCon.query(`
                                  SELECT a.uuids,  loanAccount, loanType, b.customerNumber, UPPER(b.accountName) customerName, b.branchCode,branchDesc(b.branchCode) branch ,a.loanAmount, a.tenor, a.interest, 
                                  a.paymentPlan, CAST(effectiveDate AS DATE) effectiveDate,
                                  lastRepayDate,  interestType,
                                  loanPurpose, a.appStatus, 
                                  a.approvePerson, a.postedPerson, a.postedDate,  securityType, securityValue,
                                  a.createdAt, a.updatedAt, 
                                  cc.phoneNumber, cc.customerType, cc.nationalId, cc.profession , availBal(loanAccount) balances, sum(principalAmt + interestAmt) amountDue
                                  
                                  FROM tb_loans a, tb_accounts b
                                  LEFT JOIN tb_customers cc ON cc.customerNumber = b.customerNumber
                                  where a.loanAccount = b.accountNumber
                                  and a.loanAccount = :loanAccount`, {
        replacements:{
            loanAccount: loanAccount
        },
        type: QueryTypes.SELECT,
        raw: true
      })

    
    return getUser;
    }
    