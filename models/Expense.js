module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define("tb_expense", {
        uuid: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        expenseDesc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountName: {
            type: DataTypes.STRING
        },
        postedPerson: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING        
        },
    });
    return Expense; 
}