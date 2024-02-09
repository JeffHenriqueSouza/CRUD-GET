const porta = 3003

const express = require('express')

const app = express()

app.get('/produtos', (req, res, next) => {
  res.send({nome: 'Notebook', preço: 123.45, name: "Jefferson", idade: 34, name: "Jorge", idade: 41})
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})