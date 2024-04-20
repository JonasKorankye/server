module.exports = (sequelize, DataTypes) => {
    const Upload = sequelize.define("tb_upload", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        empId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        repayAmt: {
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
    });
    return Upload; 
}