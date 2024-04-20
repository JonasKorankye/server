const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize





module.exports.reschedule = async function (loanAccount, branchCode, loanAmount, loanBalance, oldInterest, oldTenor,newInterest,newTenor){
    const postingDate = new Date().toJSON();
    const postedBy = 'OWOAHENE'
        await dbCon.query(`INSERT INTO tb_reschedules(loanAccount, branchCode, loanAmount, loanBalance, oldInterest, oldTenor,newInterest,newTenor, createdAt, postedPerson)
             VALUES('${loanAccount}', '${branchCode}', '${loanAmount}', '${loanBalance}','${oldInterest}', '${oldTenor}','${newInterest}','${newTenor}', '${postingDate}', '${postedBy}')`
        )

        const [getUser,metadata2] = await dbCon.query('call Sp_GetEmi(:loanAmount, :InterestRate, :LoanPeriod)',{
            replacements:{
                loanAmount : loanAmount,
                InterestRate: newInterest,
                LoanPeriod: newTenor
            },
            type: QueryTypes.SELECT,
            raw: true
          })
            
            const list = Object.values(getUser);    
       
      return {"responseCode": "00", "response": "Loan reschedule submitted successfully for approval", data: list};

    }