import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello World 2'))

app.listen(3333)
