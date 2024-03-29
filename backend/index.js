const express = require('express')
const app = express()
const port = 4000
const mongodb = require('./db');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/api', require("./routes/createUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})