import "../AddMCQ/addmcq.css";

const AddMCQ=()=>{
return(
    <div className="AddMCQ">
     
     <form className="AddMCQForm">

      <h1>Add MCQ</h1>
      <div className="MCQCategory">
        <div>
            <label className="Category">Category:</label>
        </div>

        <div className="select-menu">
            <select className="Cateory-Input">
             <option className="category-choose" selected>Choose...</option>
             <option className="logical">Logical</option>
             <option className="grammer">Grammer</option>
             <option className="programming">Programming</option>
            </select>
        </div>
      </div>

       <div className="MCQEasy">
            <div >
            <label className="Easy">Easy:</label>
            </div>
            <div>
            <input type="number" className="Easy-Input" inputmode="numeric" pattern="[0-9]*"
                  placeholder="Enter No of questions to be addeed for MCQ in Easy Mode " 
               />
            </div>
        </div>

        <div className="MCQMedium">
            <div >
            <label className="Medium">Medium:</label>
            </div>
            <div>
            <input type="number" className="Medium-Input" inputmode="numeric" pattern="[0-9]*"
                  placeholder="Enter No of questions to be addeed for MCQ in Medium Mode " 
               />
            </div>
        </div>

        <div className="MCQHard">
            <div >
            <label className="Hard">Hard:</label>
            </div>
            <div>
            <input type="number" className="Hard-Input" inputmode="numeric" pattern="[0-9]*"
                  placeholder="Enter No of questions to be addeed for MCQ in Hard Mode " 
               />
            </div>
        </div>
        <button className="AddnumberofMCQbutton">Add</button>
       </form>
    </div>
);
}

export default AddMCQ;