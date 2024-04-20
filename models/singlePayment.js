module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("tb_payment", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        empId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loanAccount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        repayAmt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalBalance: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transactionId: {
            type: DataTypes.STRING
        },
        reason: {
            type: DataTypes.STRING
        },
        branchCode: {
            type: DataTypes.STRING,
        },
        postedPerson: {
            type: DataTypes.STRING,
        },
        statusId: {
            type: DataTypes.STRING,
            defaultValue: 'N'
        },
        rejectReason: {
            type: DataTypes.TEXT,
        },
        InterestAmount: {
            type: DataTypes.STRING,
        },
        interest: {
            type: DataTypes.STRING,
        },
    });
    return Payment; 
}