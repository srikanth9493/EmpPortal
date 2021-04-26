import React, { useEffect, useState } from "react";
import "./Employee.css";
import Emp_details from "./Emp_details";
// import axios from "./axios.js";
import ReactModal from "react-modal";
import axios from "./axios.js";
import EmployeeForm from "./EmployeeForm";
import Popup from "./Popup";
function Employee() {
  const [emp, setemp] = useState([]);

  const [isModelOpen, setisModelOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [empCopy, setempCopy] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/employee/")
      .then((data) => {
        setemp(data.data);
        setempCopy(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInput = (e) => {
    // console.log(e.target.value);
    // console.log(empCopy, "emp copy");
    setsearchInput(() => e.target.value);
    let res = [];
    let ans = empCopy.find((item) => {
      if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
        res.push(item);
      }
    });
    console.log(res);
    setemp(() => res);
  };

  ReactModal.setAppElement("#root");
  return (
    <div className="emp__container">
      <div class="center">
        {/* <EmployeeForm></EmployeeForm> */}
        <div className="emp__header">
          <h1> Employee</h1>
          <button className="btn add" onClick={() => setOpenPopup(true)}>Add</button>
        </div>

        <input
          type="text"
          className="emp_search"
          placeholder="serach by name"
          onChange={handleInput}
        />
        <div class="emp__details">
          {emp.length == 0 ? (
            <h1>Search Not found</h1>
          ) : (
            emp.map((item) => (
              <Emp_details
                key={item._id}
                details={item}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              ></Emp_details>
            ))
          )}
        </div>
      </div>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <EmployeeForm setOpenPopup={setOpenPopup} data={[]}></EmployeeForm>
      </Popup>

      {/* <ReactModal isOpen={isModelOpen}>
        <form className="form__container" onSubmit={handleSubmit}>
          <div className="form__control">
            <label for="">Name</label>
            <input name="name" type="text" />
          </div>

          <div className="form__control">
            <label for="">age</label>
            <input type="text" name="age" />
          </div>

          <div className="form__control">
            <label for="">email</label>
            <input type="text" name="email" />
          </div>

          <div className="form__control">
            <label for="">Designation</label>
            <input type="text" name="desg" />
          </div>

          <div className="form__control">
            <label for="">Date of joining</label>
            <input type="date" name="date" />
          </div>
          <div className="form__control">
            <label for="">Image Url</label>
            <input type="text" name="url" />
          </div>

          <button className="btns" type="submit">
            close
          </button>
        </form>
      </ReactModal> */}
    </div>
  );
}

export default Employee;
