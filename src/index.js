const express = require('express')
const path = require('path')
//

const app = express()
//a função express() retorna uma aplicação express
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})
//puxa o caminho do arquivo home

router.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/contato.html'))
})
//estabelecendo as rotas para acessar o arquivo html

app.use(router)
//diz que a aplicação está utilizando estas rotas

app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor rodando')
})