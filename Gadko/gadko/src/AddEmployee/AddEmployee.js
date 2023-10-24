import "../AddEmployee/AddEmployee.css";
const AddEmployee=()=>{
    return(
       <div className="AddEmployee">
      <form className="AddEmployeeForm">
      <h1 className="Add">Add Employee</h1>
      <div className="row1">
        
        <div className="empid">
        <div><label>Employee ID:</label></div>
        <div><input type="number" inputmode="numeric" pattern="[0-9]*"
              placeholder="Enter Employee ID only in number" className="Employeeid"
              /></div>
         </div>
         <div className="empname">
         <div><label>Name:</label></div> 
          <div><input type="text"
                 placeholder="Enter User Name"className="Employeename"
            /></div> 
          </div> 
      </div>
      
        <div className="row2">
        <div><label>Email:</label></div>
        <div><input type="email"
                 placeholder="Enter Valid User Mail Id" className="Employee-email"
          /></div>
        </div>

        <div className="row3">
          <div><label>Field of Expertise:</label></div>
          <div><input type="text"
                 placeholder="Enter the name of Your Expertise field "className="Field"
           /> </div> 
        </div>

        <button className="Addemployeebutton">Submit</button>

        </form>
       </div>
       
    );
}

export default AddEmployee;