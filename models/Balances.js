module.exports = (sequelize, DataTypes) => {
    const Balances = sequelize.define("tb_balances", {
        uuids: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        accountNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        branchCode: {
            type: DataTypes.STRING
        },
        loanAmount: {
            type: DataTypes.DECIMAL(10, 2),
        },
        loanInterest: {
            type: DataTypes.DECIMAL(10, 2),
        },
        tenor: {
            type: DataTypes.STRING
        },
        balances: {
            type: DataTypes.DECIMAL(10, 2),
        },
        interestPaid: {
            type: DataTypes.DECIMAL(10, 2),
        },
        principalPaid: {
            type: DataTypes.DECIMAL(10, 2),
        },
        lastPaidDate : {
            type: DataTypes.DATE,
        },
        postingDate: {
            type: DataTypes.DATE,
        },
        postedPerson: {
            type: DataTypes.STRING,
        },
        approvedPerson: {
            type: DataTypes.STRING,
        },
        approvedDate: {
            type: DataTypes.DATE
        }
    });
    return Balances; 
}