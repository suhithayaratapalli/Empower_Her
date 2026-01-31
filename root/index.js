import express from 'express'
import dotenv from 'dotenv'
import { logger } from './middlewares/logger.middleware.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.send('Fleet Management API Running')
})

app.listen(process.env.PORT, () => {
  console.log('Server running')
})
