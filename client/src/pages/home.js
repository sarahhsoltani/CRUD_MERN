import React, { useEffect, useState } from "react";
import InputGroup from "../components/inputGroup";
import RowDetails from "../components/rowDetails";
import axios from "axios";
import Alert from "../components/alert";
function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  // Get Value from input
  const OnchageHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log("form", form);
  };
  // Post Users
  const addUsers = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3500/api/users", form)
      .then((res) => {
        setMessage(res.data.message);
        setShow(true);
        myFunction();
        setTimeout(() => {
          setShow(false);
        }, 4000);
      })
      .catch((err) => setErrors(err.response.data));
  };
  // Finf All Users
  const myFunction = async () => {
    await axios.get("http://localhost:3500/api/users").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    myFunction();
  }, []);

  // Delete Users
  const onDelete = (id_) => {
    if (window.confirm("are  you sure to delete this users")) {
      axios.delete(`http://localhost:3500/api/users/${id_}`).then((res) => {
        setMessage(res.data.message);
        setShow(true);
        myFunction();
        setTimeout(() => {
          setShow(false);
        }, 4000);
      });
    }
  };
  return (
    <div className="row p-4">
      <div className="mt-4">
        <Alert message={message} show={show} />
        <h2>Crud Users</h2>
      </div>
      <div className="col-12 col-lg-4">
        <form onSubmit={addUsers}>
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            OnchageHandler={OnchageHandler}
            errors={errors.Email}
          />
          <InputGroup
            label="LastName"
            type="text"
            name="LastName"
            OnchageHandler={OnchageHandler}
            errors={errors.LastName}
          />
          <InputGroup
            label="FirstName"
            type="text"
            name="FirstName"
            OnchageHandler={OnchageHandler}
            errors={errors.FirstName}
          />
          <InputGroup
            label="Age"
            type="text"
            name="Age"
            OnchageHandler={OnchageHandler}
            errors={errors.Age}
          />
          <button className="btn btn-primary" type="submit">
            Add user
          </button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Age</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ Email, LastName, FirstName, Age, _id }) => (
              <RowDetails
                key={_id}
                Email={Email}
                LastName={LastName}
                FirstName={FirstName}
                Age={Age}
                _id={_id}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
