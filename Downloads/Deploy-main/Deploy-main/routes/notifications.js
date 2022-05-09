
const express=require('express');
const authenticate =require('../middleware/authenticate')

const router=express.Router();

require('../db/dbconn');

const Notification = require('../models/notificationSchema');
// storege routes

// upload blogs
router.post('/addnot',(req,res)=>{
    const newnotification=new Notification({
       postedto:req.body.postedto,
        title:req.body.title,
        body:req.body.body,
        read:"Pending",
       
      
        
      
    });
    newnotification.save().then(()=>res.json("notification posted"))
    .catch((error)=>{res.status(400).json({error:"server error"})})
})
// // get review data

router.get('/getnot',authenticate ,(req, res) => {
    const regex = new RegExp('Pending', 'i');
    Notification.find({ read: regex ,postedto:req.rootUser }).sort({
        date: -1,
    }).then((result) => {
        res.status(200).json(result)
    })

});
router.get('/viewnot/:id',(req,res)=>{
    Notification.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.put("/updatenot/:id", (req, res) => {
    Notification.findById(req.params.id).then((article) => {

        article.read = 'Done';

        article.save().then(() => res.json("status ")).
            catch((err) => res.status(400).json(`Error:${err}`));

    })
})

router.get('/getnoti',authenticate,(req,res)=>{
    
    Notification.find({postedto:req.rootUser}).sort({
        date:-1
    })
    .then(result=>{ 
   
    res.send(result.length>0?result:'No Answers'); 
    }) 
    .catch(err=>{ 
    console.log(err); 
    }) 
})
// router.get('/mynot',authenticate,(req,res)=>{
    
//     Notification.find({postedBy:req.rootUser}).sort({
//             date:-1,
//         })
//         .then(result=>{ 
//         console.log('result: ',result) 
//         res.send(result.length>0?result:'No result'); 
//         }) 
//         .catch(err=>{ 
//         console.log(err); 
//         }) 
//     })
 module.exports = router;