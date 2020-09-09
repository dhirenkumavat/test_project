const express = require("express");
const router =express.Router();
var User  = require('../models/user');
var Admin  = require('../models/admin');
var Degination  = require('../models/degination');
const  mongoose = require('mongoose');
//MonogoDb Connection
const  mongoConnectionString = "mongodb+srv://ums123:dl1NXjklVpjiANjz@cluster0.cgyei.mongodb.net/ums143?retryWrites=true&w=majority"
mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true},err=>{
  if(err){
  console.warn(err);
  }else{
    console.warn("connect To MongoDB");
  }
});
//Connection Root
router.get('/',(req,res)=>{
    res.send("from Api Router")
})
//Admin Login  Post Api
router.post('/login',(req,res)=>{
 let adminData =req.body;
 Admin.findOne({email:adminData.email},(error,admin)=>{
  if(error){
    console.warn(error);
    }else{
     if(!admin){
    res.status(401).send({status:401,message: "invalid Email..."});
    }else{
    if(admin.password !== adminData.password){
    res.status(401).send({status:401,message: "invalid Password..."});
    }else{
    
    res.status(200).send({status:200,message: "login successful...",data:admin})
     }
    }
 }
});
  });

//Add user Post Api
router.post('/Add_user',(req,res)=>{
    let userData =req.body;
    let user = new User(userData);
    User.findOne({ email: req.body.email }).exec(function (error,data) {
      if (error) {
        console.warn(error);
      } else if (data){
          res.status(401).send({status:401,message: "A user with that email has already registered. Please use a different email...."})
    }else{
           user.save((error,registeruser)=>{
            if(error){
                  console.warn(error);
                }else{
                 res.status(200).send({status:200,message: "successful...."})
                }
            })
    }
    });
})
   // //Get UserData Api
router.get('/getuser',(req,res)=>{
    let userData =req.body;
    User.find({}, function(error,Users){
      if (error){
        return done(error);
      }else{
        //console.log(Users);
         if (!Users.length) {
          res.status(200).send({status:200,message: "Data Not Found..."})
        }else{
          res.status(200).send({status:200,message: "successful...",usersArray:Users})

        }
    }
});
  });
 // //Get UserBy Id Api
 router.get('/getuserbyid/:id',(req,res)=>{
  User.find({_id: req.params.id},function(error,Users){
    if (error){
      return done(error);
    }else{
      //console.log(Users);
       if (!Users.length) {
        res.status(200).send({status:200,message: "Data Not Found..."})
      }else{
        res.status(200).send({status:200,message: "successful...",usersArray:Users})

      }
  }
});
});
//Update User put Api
router.put('/updateuser',(req,res)=>{
    var fristname = req.body.fristname;
    var lastname = req.body.lastname;
    var mobile = req.body.mobile;
    var address = req.body.address;
    var degination = req.body.degination;
    //console.log(req.body._id);
    User.updateOne({'_id':req.body._id}, 
    { $set: {'fristname':fristname,'lastname':lastname,'mobile':mobile,'address':address,'degination':degination} }, function(error, result) { 
        if(error){
          console.warn(error);
        }else{
            res.status(200).send({status:200,message: "Update successful..."})
        } 
    }); 

  });
  //Delete User put Api by _id
router.delete('/Deleteuser/:id',(req,res)=>{
  //console.log(req.params.id)
    User.deleteOne({_id:req.params.id},function(error, result){
        if(error){
            console.warn(error);
          }else{
              res.status(200).send({status:200,message: "Delete successful..."})
          } 
    })
});
//Add Designation Post Api
router.post('/Add_designation',(req,res)=>{
    let DesignationData =req.body;
    let deginations = new Degination(DesignationData);
    Degination.findOne({ deginationname: req.body.deginationname }).exec(function (error,data) {
      if (error) {
        console.warn(error);
      } else if (data){
          res.status(401).send({status:401,message: "A Designation has already exit. Please Inter a different Designation...."})
    }else{
        deginations.save((error,deginationsdatas)=>{
            if(error){
                  console.warn(error);
                }else{
                 res.status(200).send({status:200,message: "successful...."})
                }
            })
    }
    });
})
//Get UserData Api
router.get('/getdesignation',(req,res)=>{
    let userData =req.body;
    Degination.find({}, function(error,Users){
      if (error){
        return done(error);
      }else{
         if (Users) {
        res.status(200).send({status:200,message: "successful...",designationArray:Users})
        }
    }
    });
  });

//Update Degination put Api
router.put('/updatedesignation',(req,res)=>{
    var deginationname = req.body.deginationname;
     Degination.updateOne({'_id':req.body._id}, 
    { $set: {'deginationname': deginationname} }, function(error, result) { 
        if(error){
          console.warn(error);
        }else{
            res.status(200).send({status:200,message: "Update successful..."})
        } 
    }); 

  });
//Delete Degination put Api by _id
router.delete('/Deletedesignation/:id',(req,res)=>{
    Degination.deleteOne({_id:req.params.id},function(error, result){
        if(error){
            console.warn(error);
          }else{
              res.status(200).send({status:200,message: "Delete successful..."})
          } 
    })
});

// //Get Deginationby Id Api
router.get('/deginationbyid/:id',(req,res)=>{
  Degination.find({_id: req.params.id},function(error,Users){
    if (error){
      return done(error);
    }else{
      //console.log(Users);
       if (!Users.length) {
        res.status(200).send({status:200,message: "Data Not Found..."})
      }else{
        res.status(200).send({status:200,message: "successful...",usersArray:Users})

      }
  }
});
});
// exports Module In router
module.exports =router;