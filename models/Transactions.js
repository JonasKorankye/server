module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define("tb_transactions", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        valueDate : {
            type: DataTypes.STRING,
        },
        postedDate : {
            type: DataTypes.STRING,
        },
        destinationAccount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creditAmount: {
            type: DataTypes.STRING,
        },
        debitAmount: {
            type: DataTypes.STRING,
        },
        transDetails: {
            type: DataTypes.TEXT,
        },
        transId: {
            type: DataTypes.STRING,
        },
        transType: {
            type: DataTypes.STRING,
        },
        batchNumber: {
            type: DataTypes.STRING,
        },
        transactionBranch: {
            type: DataTypes.STRING
        },
        sourceAccount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        POSTED_PERSON: {
            type: DataTypes.STRING,
        },
    });
    return Transactions; 
}