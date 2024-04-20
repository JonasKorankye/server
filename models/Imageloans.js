


module.exports = (sequelize, DataTypes) => {
    const ImageLoans = sequelize.define("tb_imageloans", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        nationalIdFront: {
            type: DataTypes.TEXT,
        },
        nationalIdBack: {
            type: DataTypes.TEXT,
        },
        otherFiles: {
            type: DataTypes.TEXT,
        },
        customerNumber: {
            type: DataTypes.STRING,
        },
        loanTotal: {
            type: DataTypes.STRING,
        },
        loanInterest: {
            type: DataTypes.STRING,
        },
        loanPrincipal: {
            type: DataTypes.STRING,
        },
    });
    return ImageLoans; 
}