const express = require('express')
const route = express.Router();




route.use('/index', function(req,res){
  
    res.render('index')
  
})

// route.use('/register', async(req,res) =>{
//     res.send(req.body.fname)
//     console.log("ojjj yr")
// })


// route.post('/register', function(req, res) {
//     // mongoose operations are asynchronous, so you need to wait 
//     Userdb.find({}, function(err, data) {
//         // note that data is an array of objects, not a single object!
//         res.render('/data', {
//             user : req.fname,
//             //practices: data
//         });
//     });

// route.use('/data', function(req,res){
//    // const products = Users.find()
//     res.render('data', {users: res.data}) 

  
// })

route.post('/register', async (req,res) => {
    res.send(req.body.name)
    console.log("ober sender")
   }
);

 route.get('/add-user', async (req,res) =>{
    res.render('index')
   
 });

route.get('/update-user', function(req,res){
    res.render('update')
})
route.use('/data', function(req,res){
    res.render('data')
})




module.exports = route