const PessoaModel = (sequelize) => {
    const Pessoa = sequelize.define('Pessoa', {
        nome: Sequelize.STRING,
        cargo: Sequelize.STRING,
        nascimento: Sequelize.DATE
    })
    return Pessoa
}

module.exports = PessoaModel