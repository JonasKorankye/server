module.exports = (sequelize, DataTypes) => {
    const ScheduleHist = sequelize.define("tb_scheduleHist", {
        scheduleId: {
            type: DataTypes.INTEGER
          },
        uuids: {
            type: DataTypes.STRING
        },
        loanAccount: {
            type: DataTypes.STRING,
            
        },
        loanAmount: {
            type: DataTypes.STRING,
            
        },
        period: {
            type: DataTypes.STRING,
            
        },
        interest: {
            type: DataTypes.STRING,
            
        },
        principal: {
            type: DataTypes.STRING,
            
        },
        totalMonth: {
            type: DataTypes.STRING,
            
        },
        currentBalance: {
            type: DataTypes.STRING,
            
        },
        paymentDate: {
            type: DataTypes.STRING,
            
        },
        payDate: {
            type: DataTypes.STRING
        },
        paymentStatus: {
            type: DataTypes.STRING
        },
    });
    return ScheduleHist; 
}