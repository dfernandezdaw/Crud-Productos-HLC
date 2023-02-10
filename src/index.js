const express = require('express')
const app = express()
const v1 = require('./routes/v1/indexRoutes')

// Parse incoming requests data to JSON
app.use(express.json())
app.use((req, res, next) => {
  const date = new Date().toLocaleTimeString()
  console.log(`[INFO] Request received`)
  console.log(`[INFO] Time: ${date}`)
  console.log(`[INFO] Method: ${req.method}`)
  console.log(`[INFO] URL: ${req.originalUrl}`)
  next()
})

app.use('/v1/api/', v1.router)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
