import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <input
          type="email"
          className="form-control mt-3"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
     
    </div>
  );
};

export default Form;
