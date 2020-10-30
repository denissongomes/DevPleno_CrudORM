const Sequelize =  require('sequelize')
const sequelize = new Sequelize('cadastro-orm', 'root','', {
    dialect: 'mysql',
    host: '127.0.0.1'
} )
 
const fs = require('fs');
const path = require('path');
 
// object to hold all the models to export
const models = {};

// Read all the files from this dir and load the models
fs.readdirSync(__dirname)
    .forEach((file) => {
      if (file !== path.basename(__filename) && file.endsWith('.js')) {
        const model = require(path.join(__dirname, '/', file.replace(/\.js$/, '')))(sequelize, Sequelize);;
        models[model.name] = model
      }
    });

//const Pessoa = require('./pessoas.js')(sequelize, Sequelize); 
//const Usuario = require('./usuario.js')(sequelize, Sequelize); 


module.exports = {
    sequelize,
    models 
}