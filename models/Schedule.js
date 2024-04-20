module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define("tb_schedule", {
        scheduleId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        uuids: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loanAccount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loanAmount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        period: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interest: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        principal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalMonth: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentBalance: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paymentDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payDate: {
            type: DataTypes.STRING
        },
        paymentStatus: {
            type: DataTypes.STRING
        },
    });
    return Schedule; 
}