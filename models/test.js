module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define("tb_test", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        text1: {
            type: DataTypes.STRING
        },
        text2: {
            type: DataTypes.STRING
        },
    });
    return Test; 
}