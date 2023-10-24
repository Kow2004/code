import {useState} from 'react';
import "../Candidates/Candidates.css";
const Candidates=()=>{

    const [data,setdata]=useState([
        {
            candidateId:"1",
            candidateName:"Ram"
        },
        {
            candidateId:"2",
            candidateName:"Sam"
        },{
            candidateId:"3",
            candidateName:"Amu"
        },{
            candidateId:"4",
            candidateName:"Ramya"
        }
    ]);

   return(
    <div className="Candidates">
    <h1>Candidates</h1>
    <div className="Table">

         <table>
             <thead>
                <tr>
                    <th>Candidates ID</th>
                    <th>Candidates Name</th>
                    <th>Candidates Details</th>
                </tr>
                <tbody>
                   {data.map((user)=>(
                    <tr>
                       <td>{user.candidateId}</td> 
                       <td>{user.candidateName}</td>
                       <td>
                        <button className='tablebutton'>
                            Details
                        </button>
                       </td>
                    </tr>
                   ))}
                </tbody>
             </thead>
         </table>

    </div>
    </div>
   );
}

export default Candidates;