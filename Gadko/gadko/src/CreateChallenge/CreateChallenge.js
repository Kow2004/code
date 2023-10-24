import "../CreateChallenge/CreateChallenge.css";

const CreateChallenge=()=>{
    return(
       
     <div className="ContestDetails">
     
      <form className="ContestDetailsform">
      <h1 className="CreateChallenge">Create Contest</h1>
          <label>Contest Name:</label>
          <input type="text"
                 className="ContestName"
                 required
          />
          <label>Start Date:</label>
          <input type="text"
                 className="StartTime"
          />
           <label>End Date:</label>
          <input type="text"
                 className="EndTime"
          />
          <label>Details:</label>
          <textarea type="text"
                 className="Details"
                 placeholder="Write a short summary about the challenge"
          />
           <label>Rules:</label>
          <textarea type="text"
                 className="Rules"
                 placeholder="Write a short summary about Rules of the challenge"
          />
          <label>Scoring:</label>
           <textarea type="text"
                 className="Score"
          />
          <button className="Nextbutton">Next</button>

     </form>  
     </div>
     
    );
}

export default CreateChallenge;