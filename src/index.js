import express from 'express'
import bodyParser from 'body-parser'

import config from './config'
import routes from './routes'

const app = express()

app.use('/welcome', (req, res) => {
  res.send({
    message: 'Welcome to the budget api'
  })
})

app.use(bodyParser.json())

app.use('/v1', routes)

app.listen(config.port, () => {
  console.log(`server running in port ${config.port}`)
})

export default app


