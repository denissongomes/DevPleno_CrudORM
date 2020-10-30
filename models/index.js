const Sequelize =  require('sequelize')
const sequelize = new Sequelize('cadastro-orm', 'root','', {
    dialect: 'mysql',
    host: '127.0.0.1'
} )

const pessoa = require('./pessoas.js')(sequelize, Sequelize); 

module.exports = {
    sequelize,
    models: pessoa 
}