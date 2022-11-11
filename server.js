const express = require('express')
const app = express()
//make the port variable dynamic
const port = process.env || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})