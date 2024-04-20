const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'credit_scorer',
    'root',
    'P@$s1234',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    })

 var getConn = {};

 getConn.sequelize = sequelize;
 getConn.Sequelize = Sequelize;

module.exports = getConn;

    // module.exports.getConn = sequelize