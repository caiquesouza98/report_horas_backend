import mongoose from "mongoose"
import * as dotenv from 'dotenv'

dotenv.config()

const server = process.env.DATABASE_URL

mongoose.set('strictQuery', false)
mongoose.set('bufferCommands', false);

const _connect = async () => {
    mongoose.connect(server)
        .then(() => {
            console.log('Database connected successfully.')
        })
        .catch( err => {
            console.error('Database connection error', err)
        })
}

export default _connect