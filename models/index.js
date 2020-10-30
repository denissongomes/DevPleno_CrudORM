const Sequelize =  require('sequelize')
const sequelize = new Sequelize('cadastro-orm', 'root','', {
    dialect: 'mysql',
    host: '127.0.0.1'
} )

const Pessoa = sequelize.define('Pessoa', {
    nome: Sequelize.STRING,
    cargo: Sequelize.STRING,
    nascimento: Sequelize.DATE
})