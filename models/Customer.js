module.exports = (sequelize, DataTypes) => {
    const Customers = sequelize.define("tb_Customers", {
        uuids: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        customerNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customerName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        middleName: {
            type: DataTypes.STRING,
        },
        branchCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customerType: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.ENUM('F', 'M', 'C'),
        },
        nationalId: {
            type: DataTypes.STRING,
        },
        profession: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        idExpiryDate : {
            type: DataTypes.DATE,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        deathCert: {
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
            type: DataTypes.DATE,
        },
        amendedPerson: {
            type: DataTypes.STRING,
        },
        empId: {
            type: DataTypes.STRING,
        },
        appStatus: {
            type: DataTypes.ENUM('Y', 'N', 'R', 'C'),
        },
        customerStatus: {
            type: DataTypes.STRING,
        },
        blacklist: {
            type: DataTypes.TEXT,
        },
        marital: {
            type: DataTypes.STRING,
        },
    });
    return Customers; 
}