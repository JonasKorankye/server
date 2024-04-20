module.exports = (sequelize, DataTypes) => {
    const Reschedule = sequelize.define("tb_Reschedule", {
        uuids: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        loanAccount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branchCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loanAmount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loanBalance: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        oldInterest: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        oldTenor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        newInterest: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        newTenor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postedPerson: {
            type: DataTypes.STRING
        },
    });
    return Reschedule; 
}