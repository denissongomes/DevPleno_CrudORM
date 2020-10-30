const express = require('express')
const path = require('path')
const port = process.env.Port || 3000
const bodyParser = require('body-parser')

const model = require('./models/index')
const pessoas = require('./routes/pessoas')

app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use('/pessoas', pessoas)

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

model.sequelize.sync().then(() => {
    app.listen(port, (err) => {
        if(err) {
            console.log('Não conectado')
        } else {
            console.log('Conectado na porta: ' + port)
        }
    })
})
