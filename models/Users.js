module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("tb_users", {
        uuids: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pass: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        middleName: {
            type: DataTypes.TEXT,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.TEXT,
        },
        gender: {
            type: DataTypes.ENUM('M', 'F'),
        },
        staffId: {
            type: DataTypes.STRING,
        },
        staffCategory: {
            type: DataTypes.STRING,
        },
        userType: {
            type: DataTypes.STRING,
        },
        userAccess: {
            type: DataTypes.STRING,
        },
        branch: {
            type: DataTypes.STRING,
        },
        permission: {
            type: DataTypes.STRING,
        },
        dob: {
            type: DataTypes.STRING,
        },
        logintimes: {
            type: DataTypes.STRING,
        },
        loginupdate: {
            type: DataTypes.STRING,
        },
        issuspend: {
            type: DataTypes.STRING,
        },
        logintried: {
            type: DataTypes.STRING,
        },
        loginPassword: {
            type: DataTypes.STRING,
        },
        logindatetime: {
            type: DataTypes.DATE,
        },
        appStatus: {
            type: DataTypes.ENUM('Y','N', 'R', 'L', 'P'),
        },
        logout: {
            type: DataTypes.DATE,
        },
        reason:{
            type: DataTypes.TEXT,
        },
    });
    return Users;
}