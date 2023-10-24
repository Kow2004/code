import "../EditandAddQues/EditaddQues.css";

const EditandAddQues=()=>{
    return(
      <div className="EditandAddQues">
        <form className="EditandAddQuesform">
        <h1>Edit/Add Question</h1>
        <div className="Question">
            <div><label className="Question-label">Question:</label></div>
            <div><textarea type="text"
                 className="Question-input"
                 placeholder="Enter the Question"/>
            </div>
        </div>

        <div className="option1">
            <div><label className="option1-label">Option 1:</label></div>
            <div>
                <input type="text" className="option1-input" placeholder="Enter the option"/>
            </div>
        </div>

         
        <div className="option2">
            <div><label className="option2-label">Option 2:</label></div>
            <div>
                <input type="text" className="option2-input" placeholder="Enter the option"/></div>
        </div> 

        <div className="option3">
            <div><label className="option3-label">Option 3:</label></div>
            <div>
                <input type="text" className="option3-input" placeholder="Enter the option"/></div>
        </div> 

        <div className="option4">
            <div><label className="option4-label">Option 4:</label></div>
            <div>
                <input type="text" className="option4-input" placeholder="Enter the option"/></div>
        </div>

       <div className="Correctoption">
            <div><label className="Correctoption-label">Correct option:</label></div>
        <div>
                <input type="text" className="Correctoption-input" placeholder="Enter the Correct option"/></div>
       </div>

       <button className="EditandAddQues-button">Add</button>
       </form>
       </div>
      );
}
export default EditandAddQues;
