import "../Addcodequestion/Addcodequestion.css";

const Addcodequestion=()=>{
    return(
    <div className="Addcodequestion">
     <form className="Addcodequestionform">
    <h1>Add Coding Question</h1>
    <div className="nofque">
        <div><label className="nofque-label">No of Question:</label></div>
        <div><input type="number" className="nofque-Input" inputmode="numeric" pattern="[0-9]*"
                  placeholder="Enter No of questions to be addeed for Coding " 
               /></div>      
    </div>
    <div className="Difficultlevel">
        <div><label className="Difficultlevel-label">Difficult Level:</label></div>
        <div><input type="number" className="Difficultlevel-Input" inputmode="numeric" pattern="[0-9]*"
                  placeholder="Specify Difficult level (Easy,Medium,Hard) of Coding Question"
               /></div>      
    </div>
    <button className="Addcodequestion-button"> Add</button>
    </form>
    </div>
    );
}

export default Addcodequestion;