const Sequelize =  require('sequelize')
const sequelize = new Sequelize('cadastro-orm', 'root','', {
    dialect: 'mysql',
    host: '127.0.0.1'
} )

const Pessoa = require('./pessoas.js')(sequelize, Sequelize); 

sequelize.sync().then(() => console.log('synced'))