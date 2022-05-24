const express = require('express');
const bodyparser = require('body-parser')
const path = require('path')
const app = express();
app.use(express.json())
const fs = require('fs');
// const mongoose = require('mongoose')
// mongoose.connect("mongodb://127.0.0.1:27017/mg")
// require('./server/database/conn')
app.use(bodyparser.urlencoded({extended : true}))



app.set("view engine", "ejs")

//set assets file
app.use('/style', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/script', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))


// app.get("/data", controller.getdata);

// app.get("/data/delete/:id", controller.deletedata);
// app.post("/create/data", controller.createdata);
// app.get("/data/getdata/:id", controller.getSingledata)
// app.post("/data/update/:id", controller.updatedata)
// console.log('Hello node js');

app.use('/', require('./server/routes/router'))










app.listen(port, function(req, res){
    console.log(`listening to ${port}`)
})