import './helpers/dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import logger from './helpers/logger'
import router from './routes'
import { notFound, errorHandler } from './helpers/errors'
import auth from './helpers/auth'

const port = parseInt(process.env.PORT, 10)
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan(process.env.MORGAN_LOG))
app.use(cors({ origin: process.env.ORIGIN }))
app.use(helmet())
app.use(auth.initialize())

app.use(router)
//to routes/index.js

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => logger.success(`Application started on http://localhost:${process.env.PORT}`))