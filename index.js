const express = require('express')
const path = require('path')
const port = process.env.Port || 3000

const pessoas = require('./routes/pessoas')

app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, (err) => {
    if(err) {
        console.log('Não conectado')
    } else {
        console.log('Conectado na porta: ' + port)
    }
})