import "../AddParticipants/Addparticipants.css";

const AddParticipant=()=>{
    return(
        <div className="Addparticipant">
            <form className="AddparticipantForm">
                <h1>Add Participant</h1>
                <div className="AofE">
                <div><label className="AofE-label">Area of Expertise:</label></div>
                <div><input type="text"
                 placeholder="Enter name of Field(eg:React,Frontend)"className="AofE-input"/>
                </div>
                </div>
                <div className="Email">
                <div><label className="Email-label">Email:</label></div>
                <div><input type="email"
                 placeholder="Enter Valid Email Id"className="Email-input"/>
                 <button className="Addparticipantbutton">Add</button>
                </div>
                </div>
            </form>
        </div>
    );
}

export default AddParticipant;