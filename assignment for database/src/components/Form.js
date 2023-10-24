import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function Form({ addData, isEdit, editValue, setIsEdit }) {

  const navigate = useNavigate();
  const location = useLocation();

  const [erroremail, setErrorEmail] = useState({ message: "" });
  const [errorfname, setErrorfname] = useState({ message: "" });
  const [errorlname, setErrorlname] = useState({ message: "" });
  const [errormobile, setErrormobile] = useState({ message: "" });
  const [errordob, setErrordob] = useState({ message: "" });

  const [formData, setFormData] = useState(
    {
      email: '',
      firstname: '',
      lastname: '',
      mobile: '',
      dob: ''
    }
  );

    //To not show in edit data the value if put operation takes place
    useEffect(() => {
      if (isEdit) {
        setFormData({
          email: editValue.email,
          firstname: editValue.firstname,
          lastname: editValue.lastname,
          mobile: editValue.mobile,
          dob: editValue.dob
        })
      }
    }, []);


 

  const [emailData, setemailData] = useState("");
  const [fnameData, setfnameData] = useState("");
  const [lnameData, setlnameData] = useState("");
  const [mobileData, setmobileData] = useState("");
  const [dobData, setdobData] = useState("");
  
  const handleemailChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
    const { name, defaultValue } = e.target;
    const input = e.target.defaultValue;
    if (input == "") {
      setErrorEmail({ message: "Please enter email" })
    } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)) {
      setemailData({ ...emailData, [name]: defaultValue });
      setErrorEmail({ message: "" })
    } else {
      setErrorEmail({ message: "Enter valid email" })
    }
  }
    const handlefnameChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData,[e.target.name]: e.target.value});
      const finput = e.target.value;
      if (finput == "") {
        setErrorfname({ message: "Please Enter first name" })
      } else if (/^[a-zA-Z]+$/.test(finput)) {
        setfnameData(finput)
        setErrorfname({ message: "" })
      } else {
        setErrorfname({ message: "Enter valid firstname" })
      }
    };

    const handlemobileChange = (e) => {
      const { name, defaultValue } = e.target;
    setFormData({...formData,[e.target.name]: e.target.value});

    setFormData({...formData,[e.target.name]: e.target.value});

      const mobilein = e.target.value;
      if (mobilein == "") {
        setErrormobile({ message: "Please Enter  Mobile Number" })
      } else if (/^[0-9]+$/.test(mobilein)) {
        setmobileData(mobilein)
        setErrormobile({ message: "" })
      } else {
        setErrormobile({ message: "Enter valid Mobile Number" })
      }
    };
    const handledobChange = (e) => {
      const { name, defaultValue } = e.target;
    setFormData({...formData,[e.target.name]: e.target.value});

      const dobin = e.target.value;
      if (dobin == "") {
        setErrordob({ message: "Please Enter your dob" })
      } else if (/^[0-9/%]+$/.test(dobin)) {
        setdobData(dobin)
        setErrordob({ message: "" })
      }
    };

    const handlelnameChange = (e) => {
      const { name, defaultValue } = e.target;
    setFormData({...formData,[e.target.name]: e.target.value});

      const linput = e.target.value;
      if (linput == "") {
        setErrorlname({ message: "Please Enter Last Name" })
      } else if (/^[a-zA-Z]+$/.test(linput)) {
        setlnameData(linput)
        setErrorlname({ message: "" })
      } else {
        setErrorlname({ message: "Enter valid Last Name" })
      }
    };
    // /^[a-zA-Z]+$/ - alphbets
    // /^[0-9]+$/   -  numbers


    const handleSubmit = async (e) => {
      e.preventDefault();
      if (isEdit) {
        console.log("PUT",formData);
        await axios.put(`http://localhost:5050/api/call/student/update`, formData)
          .then(() => {
            navigate('/');
          })
          .catch((error) => {
            console.error(error);
          });
        setIsEdit(false);
      } else {
        await axios.post("http://localhost:5050/api/call/student/add", formData)
          .then((response) => {
            addData(response.data);
            navigate('/');
          })
          .catch((error) => {
            console.error(error);
          });
      }
      setFormData({
        email: '',
        firstname: '',
        lastname: '',
        mobile: '',
        dob: ''
      });
      navigate("/");
    };

    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Email:
            <input
              type="text"
              name="email"
              defaultValue={emailData.email === "" ? "" : emailData.email}
              onChange={handleemailChange}
              className="email-input"
              value={formData.email}
              disabled={isEdit}
            />
          </label>
          {erroremail.message && <div>{erroremail.message}</div>}
          <label className="form-label">
            First Name:
            <input
              type="text"
              name="firstname"
              defaultValue={fnameData == "" ? "" : fnameData}
              onChange={handlefnameChange}
              className="firstname-input"
              value={formData.firstname}

            />

          </label>
          {errorfname.message && <div>{errorfname.message}</div>}
          <label className="form-label">
            Last Name:
            <input
              type="text"
              name="lastname"
              defaultValue={lnameData == "" ? "" : lnameData}
              onChange={handlelnameChange}
              className="lastname-input"
              value={formData.lastname}

            />
          </label>
          {errorlname.message && <div>{errorlname.message}</div>}
          <label className="form-label">
            Mobile Number:
            <input
              type="text"
              name="mobile"
              maxLength={10}
              defaultvalue={mobileData == "" ? "" : mobileData}
              onChange={handlemobileChange}
              className="mobile-input"
              value={formData.mobile}
            />
          </label>
          {errormobile.message && <div>{errormobile.message}</div>}
          <label className="form-label">
            DOB:
            <input
              type="date"
              name="dob"
              maxLength={10}
              defaultvalue={dobData == "" ? "" : dobData}
              onChange={handledobChange}
              className="dob-input"
              value={formData.dob}
            />
          </label>
          {errordob.message && <div>{errordob.message}</div>}
          <button type="submit" className="form-submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
export default Form;
