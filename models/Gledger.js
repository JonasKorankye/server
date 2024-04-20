module.exports = (sequelize, DataTypes) => {
    const Gledger = sequelize.define("tb_gledger", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        chartGroup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        global: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        branchCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountProd: {
            type: DataTypes.STRING
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
    return Gledger; 
}