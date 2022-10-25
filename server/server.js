"use strict";

// import node_modules
const express = require('express')
const helmet = require("helmet");
const morgan = require('morgan')

const {
  getSteps,
  getAccessmentResources,
  getAccessmentActions
} = require("./handlers");

const app = express()
const port = 8000

app.use(helmet());
app.use(morgan('tiny'));

// app.get('/hello', (req, res) => {
//   res.status(200).json({
//     status: 200,
//     message: "Hi"
//   })
// })


app.get("/api/get-steps/:step", getSteps)
app.get("/api/get-resources", getAccessmentResources)
app.get("/api/get-actions/:issue", getAccessmentActions)

// Catch 404
app.get("*", (req, res) => {
  res.status(404).json({
  status: 404,
  message: "This is obviously not what you are looking for.",
  });
})

app.listen(port, () => {
  console.log(`Server launched on port ${port}`)
})

