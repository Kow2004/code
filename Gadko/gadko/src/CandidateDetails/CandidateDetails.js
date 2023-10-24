import "../CandidateDetails/CandidateDetails.css";

const CandidateDetails=()=>{
  return(
    <div className="CandidateDetails">
        <form className="CandidateDetailsForm">
            <h1>Candidate Details</h1>

            <div className="CandidateDetails-Name">
             <div><label className="CandidateDetails-label">Name:</label></div>
             <div><input className="CandidateDetails-Name-input" type="text" placeholder="Enter Your Name"/></div>
            </div>
            <div className="CandidateDetails-Score">
            <div><label className="CandidateDetails-label">Score:</label></div>
             <div><input className="CandidateDetails-Score-input"type="number"  inputmode="numeric" pattern="[0-9]*" placeholder="Enter Your Score in Test" /></div>
            </div>
            <div className="CandidateDetails-userfeedback">
            <div><label className="CandidateDetails-label">Userfeedback:</label></div>
             <div><textarea className="CandidateDetails-userfeedback-input" type="text" placeholder="Userfeedback is Shared to Company employees only."/></div>
            </div>
            <div className="CandidateDetails-adminfeedback">
            <div><label className="CandidateDetails-label">Adminfeedback:</label></div>
             <div><textarea className="CandidateDetails-adminfeedback-input" type="text" placeholder="Adminfeedback is Shared to higher-officials of Company only."/></div>
            </div>
            <button className="CandidateDetails-button">Submit</button>
        </form>
    </div>
  );
}
export default CandidateDetails;