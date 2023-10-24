const pool =require('/home/divum/Desktop/REACTAPI/db.js');
const queries=require(`./Queries`);

const getstudent=(req,res)=>{
    pool.query(queries.get,(error,result) =>{
        if(error) throw error;
          res.status(200).json(result.rows);
    }
    )
};


const getstudentbyid=(req,res)=>{
    const studentid=parseInt(req.params.studentid);
    pool.query(
        queries.getbyid,[studentid],(error,result)=>{
        if(error) throw error;
          res.status(200).json(result.rows);
    }
    )
};

const addstudent=(req,res)=>{
   const { studentname,email,age,dob }=req.body;
   //check if email exist
         pool.query(
           queries.checkifemailexist,[email],(error,result)=>{
              if (result.rows.length){
                 res.send("Email already exist");
              }
            }
         )
    //addstudent
             pool.query(
                queries.addstu,[studentname,email,age,dob],(error,res)=>{
                    if(error) throw console.log(error); 
                    res.status(201).send("student Created Successfully");
                }              
            )


 };
    


module.exports={
    getstudent,getstudentbyid,addstudent 
};