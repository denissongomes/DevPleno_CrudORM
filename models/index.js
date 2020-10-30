const Sequelize =  require('sequelize')
const sequelize = new Sequelize('cadastro-orm', 'root','', {
    dialect: 'mysql',
    host: '127.0.0.1'
} )

// const models = {}
// const fs = require('fs')
// const path = require('path')
 
//     fs
//     .readdirSync(__dirname)
//     .filter((file) => file !== 'index.js')
//     .forEach(file => {
//         const model = require(path.join(__dirname, file)); 
//         models[models.name] = model(sequelize, Sequelize)
//         //
//     });
const pessoa = require('./pessoas.js')(sequelize, Sequelize); 

module.exports = {
    sequelize,
    models: { 
        pessoa 
    }
}