const Sequelize =  require('sequelize')
const sequelize = new Sequelize('cadastro-orm', 'root','', {
    dialect: 'mysql2',
    host: '127.0.0.1'
} )
