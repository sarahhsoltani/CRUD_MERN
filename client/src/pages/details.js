import React,{useState,useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios";
import InputGroup from '../components/inputGroup';
function Details() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const navigate=useNavigate()
 const {id}=useParams();
  // Get Value from input
  const OnchageHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log("form", form);
  };
  // Post Users
  const putUsers = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3500/api/users/${id}`, form)
      .then((res) => { 
        navigate('/')
      })
      .catch((err) => setErrors(err.response.data));
  };
   
 // Finf All Users
 const myFunction = async () => {
  await axios.get(`http://localhost:3500/api/users/${id}`).then((res) => {
    setForm(res.data);
  });
};

useEffect(() => {  
  myFunction();
}, []);
  return (
    <div className='container'>
      <div className="col-12 col-lg-4 ">
        <form onSubmit={putUsers}>
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            OnchageHandler={OnchageHandler}
            errors={errors.Email}
            value={form.Email}
          />
          <InputGroup
            label="LastName"
            type="text"
            name="LastName"
            OnchageHandler={OnchageHandler}
            errors={errors.LastName}
            value={form.LastName}
          />
          <InputGroup
            label="FirstName"
            type="text"
            name="FirstName"
            OnchageHandler={OnchageHandler}
            errors={errors.FirstName}
            value={form.FirstName}
          />
          <InputGroup
            label="Age"
            type="text"
            name="Age"
            OnchageHandler={OnchageHandler}
            errors={errors.Age}
            value={form.Age}
          />
          <button className="btn btn-primary" type="submit">
            Update user
          </button>
        </form>
      </div>
      </div>
  )
}

export default Details