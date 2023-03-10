import express from 'express'
import cors from 'cors'
import reportRouter from './routes/report.js'
import db from './db/db.js'
import helmet from 'helmet'
import employeeRouter from './routes/employee.js'
import morganMiddleware from './middlewares/morgan.middleware.js'


const app = express()

db()

app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morganMiddleware)

app.use('/api/user', employeeRouter)
app.use('/api/report', reportRouter)

app.use(cors())

export default app