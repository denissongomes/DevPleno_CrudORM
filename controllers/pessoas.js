const index = async(dependencies, req, res) => {
    const pessoas = await dependencies.pessoa.findAll()
    res.send(pessoas)
}

module.exports = {
    index
} 