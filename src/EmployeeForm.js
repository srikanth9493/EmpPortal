import { TextField } from "@material-ui/core";
import React from "react";
import axios from "./axios.js";
import "./EmployeeForm.css";
function EmployeeForm(props) {
  const { setOpenPopup, data } = props;
  console.log(data, "empform");
  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let age = e.target.age.value;
    let desg = e.target.desg.value;
    let date = e.target.date.value;
    let url = e.target.url.value;
    console.log(name, email, age, desg, url);

    // console.log(user);
    axios
      .post("/api/v1/employee/", {
        name: name,
        imageUrl: url,
        empCode: 104,
        email_id: email,
        emp_salary: 60000,
        age: age,
        report_to: "Swetha",
        role: desg,
        phone_no: "9949859934",
        joing_date: "2016-07-11T03:54:59Z",
      })
      .then((res) => console.log(res.data));
    setOpenPopup(false);

    // console.log(date);
    // setisModelOpen(false);
  };

  return (
    <div>
      <form className="form__container" onSubmit={handleSubmit}>
        <div className="form__control">
          <TextField
            id="outlined-name"
            label="Name"
            name="name"
            value={data[0]?.name}
            // onChange={handleChange}
            variant="outlined"
          />
        </div>

        <div className="form__control">
          <TextField
            id="outlined-name"
            label="age"
            name="age"
            value={data[0]?.age}
            // onChange={handleChange}
            variant="outlined"
          />
        </div>

        <div className="form__control">
          <TextField
            id="outlined-name"
            label="email"
            name="email"
            value={data[0]?.email_id}
            // onChange={handleChange}
            variant="outlined"
          />
        </div>

        <div className="form__control">
          <TextField
            id="outlined-name"
            label="Designation"
            name="desg"
            value={data[0]?.role}
            // onChange={handleChange}
            variant="outlined"
          />
        </div>

        <div className="form__control">
          <label for="">Date of joining</label>
          <input type="date" name="date" />
        </div>
        <div className="form__control">
          <TextField
            id="outlined-name"
            label="ImageUrl"
            name="url"
            value={data[0]?.imageUrl}
            // onChange={handleChange}
            variant="outlined"
          />
        </div>

        <button className="btn form_btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
