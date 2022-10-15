const express = require('express')
const helmet = require("helmet");
const morgan = require('morgan')
const app = express()
const port = 8000

app.use(helmet());
app.use(morgan('tiny'));

app.get('/hello', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Hi"
  })
})

app.listen(port, () => {
  console.log(`Server launched on port ${port}`)
})

