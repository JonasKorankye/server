module.exports = (sequelize, DataTypes) => {
    const Branch = sequelize.define("tb_Branches", {
        branchCode: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        branchName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        branchContact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        branchEmail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        branchStatus: {
            type: DataTypes.ENUM('Y', 'N'),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Branch; 
}