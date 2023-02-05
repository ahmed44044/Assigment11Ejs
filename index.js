import express from 'express'
import path from 'path'
import  cors from 'cors'
import {fileURLToPath} from 'url'
import { connectDB } from './DB/connection.js'
const __dirname=path.dirname(fileURLToPath(import.meta.url))
import dotenv from 'dotenv'
dotenv.config({path:path.join(__dirname,'./config/.env')})

import * as indexRouter from './src/modules/index.router.js'
const app = express()
const port = 3001
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'./src/views/utils')))
app.use(express.json())

app.use('/product',indexRouter.productRouter)



 connectDB()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))