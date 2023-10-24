const get="SELECT * FROM public.student ORDER BY studentid ASC";
const getbyid="SELECT * FROM student where studentid=$1";
const checkifemailexist="SELECT s FROM student s WHERE s.email=$1";
const addstu="INSERT INTO public.student( studentname, email, age) VALUES ($1,$2,$3)";


module.exports={
    get,getbyid,checkifemailexist,addstu,
};