import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import Form from './Form';

function UserDetails({setIsEdit,setEditValue}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    axios.get("http://localhost:5050/api/call/student/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addData = (newData) => {
    const updated = [...data, newData];
    setData(updated);
  };

  const handleDelete = (email) => {
    axios.delete(`http://localhost:5050/api/call/student/delete/${email}`)
      .then(() => {
        const updatedData = data.filter((user) => user.email !== email);
        setData(updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const navigate = useNavigate();
  //To display data from table onclick edit
  const editHandle = (user) => {
    setEditValue(
      {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      mobile: user.mobile,
      dob: user.dob
      }
    );
    setIsEdit(true);
    navigate("/form");
  }

//To redirect to form page on clicking add
  const addHandler = () => {
    setIsEdit(false);
    navigate("/form");
  }
  
  return (
    <>
      <div className="output">
        <img src="/" className="App-logo" alt='loading image' /><br></br>
        <div className="navigation-container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link onClick={addHandler}>Add Data</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
      <div classNmae="Table">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Mobile Number</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr>
                <td>{user.email}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.mobile}</td>
                <td>{user.dob}</td>
                <td>
                  <button onClick={()=>editHandle(user)} className='edit-btn'>
                    Edit
                  </button>
                  {/* <button>Edit</button> */}
                  <button onClick={() => handleDelete(user.email)} className='delete-btn'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserDetails;
