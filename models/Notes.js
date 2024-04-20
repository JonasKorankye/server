module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define("tb_notes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        uuids: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
        },

        reason: {
            type: DataTypes.STRING,
        },
    });
    return Notes; 
}