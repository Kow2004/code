const Pool=require('pg').Pool;
const pool=new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'record',
    password: 'divum',
    port: 5432,
})
module.exports=pool;