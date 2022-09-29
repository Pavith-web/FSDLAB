const express=require('express')
const mongoose=require('mongoose')
const url = 'mongodb://localhost/booksDB'
const app = express()
mongoose.connect(url)
const con = mongoose.connection
con.on('open',() =>
{
    console.log("database connected")
})
//const bookRouter = require('./routes/books')
//app.use('/books',bookRouter)
app.listen(9000,() =>
{
    console.log("server started")
})