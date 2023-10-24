const { Pool }=require('pg');
const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"TEST",
    password:"divum",
    port:5432,
});
module.exports=pool;