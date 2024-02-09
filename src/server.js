const porta = 3003

const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('./produtos/: id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProdutos({
    nome: req.body.nome,
    preço: req.body.preco
  })
  res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProdutos({
    id: req.params.id,
    nome: req.body.nome,
    preço: req.body.preco
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProdutos(req.params.id)
  res.send(produto)
  })
 
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})