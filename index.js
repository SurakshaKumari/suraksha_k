const express = require('express');

const bodyparser = require('body-parser')
const path = require('path')

const app = express();
const ejs = require('ejs');
const fs = require('fs')
const port = 3000;



//body parser to serialize the data
app.use(bodyparser.urlencoded({extended : true}))

//set ejs
app.set("view engine", "ejs")

//set assets file
app.use('/style', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/script', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))


app.use('/',require('./routes/router'))

app.use('/', (req,res) =>
{
    res.render('index')
})


app.listen(port, function(req, res){
    console.log(`listening to ${port}`)
})