module.exports = (sequelize, DataTypes) => {
    const Accounts = sequelize.define("tb_account", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        customerNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        branchCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountType: {
            type: DataTypes.STRING,
            defaultValue: 'SAVINGS'
        },
        accountBalance: {
            type: DataTypes.STRING,
            defaultValue: '0.00'
        },
        postedPerson: {
            type: DataTypes.STRING,
        },
        accountStatus: {
            type: DataTypes.STRING,
            defaultValue: 'NORMAL'
        },
        lastActivity: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
    });
    return Accounts; 
}