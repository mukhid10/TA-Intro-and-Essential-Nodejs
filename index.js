const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('Welcome to about us page')
  })

  app.get('/contact', (req, res) => {
    res.send('Welcome to Contact us page')
  })

app.listen(port, () => {
  console.log(`Success app listening on port ${port}`)
})