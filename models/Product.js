module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product_setup", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        productName: {
            type: DataTypes.STRING
        },
        proCode: {
            type: DataTypes.STRING
        },
        rateType: {
            type: DataTypes.STRING
        },
        rate: {
            type: DataTypes.STRING
        },
        processfee: {
            type: DataTypes.STRING
        },
        limitAmt: {
            type: DataTypes.STRING
        },
        limitMin: {
            type: DataTypes.STRING
        },
        limitMax: {
            type: DataTypes.STRING
        },
        formAmt: {
            type: DataTypes.STRING
        },
        insurance: {
            type: DataTypes.STRING
        },
        levels: {
            type: DataTypes.STRING
        },
        tenor: {
            type: DataTypes.STRING
        },
        customerType: {
            type: DataTypes.STRING
        },
        paymentPlan: {
            type: DataTypes.STRING
        },
        schedule: {
            type: DataTypes.STRING
        },
        isSuspend: {
            type: DataTypes.ENUM('Y', 'N'),
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return Product; 
}