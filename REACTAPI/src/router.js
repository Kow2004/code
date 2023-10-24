 const { Router }=require('express');
 const router=Router();
 const controller=require("./controller");

 router.get('/',controller.getstudent);
 router.get('/:studentid',controller.getstudentbyid);
router.post('/post/',controller.addstudent);
 module.exports=router;