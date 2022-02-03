const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesURL = require('./Routes/routes')
const cors = require('cors')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('database connected'))

app.use(express.json()) //body parser
app.use(cors())
app.use('/app', routesURL)
app.listen(4000, () => {
    console.log('Server is up and running!!')
})