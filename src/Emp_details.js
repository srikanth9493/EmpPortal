import React, { useEffect, useState } from "react";
import "./Emp_details.css";
import axios from "./axios.js";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import Emp_Delete from "./Emp_Delete";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  IconButton,
  TextField,
} from "@material-ui/core";
import Popup from "./Popup";
import EmployeeForm from "./EmployeeForm";
function Emp_details({ details }) {
  const [emp, setemp] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [empid, setempid] = useState("");
  const [emp_data, setemp_data] = useState([]);
  const [openpopup, setopenpopup] = useState(false);
  const [emp_name, setemp_name] = useState("");

  const handleClickOpen = (id) => {
    setOpen(true);
    console.log(id);
    setempid(id);
    axios
      .get(`/api/v1/employee/${id}`)
      .then((data) => setemp_name(data.data[0].name));

    // console.log(id, "hai");
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = (id) => {
    axios
      .delete(`/api/v1/employee/${empid}`)
      .then((data) => console.log(data.data));
    handleClose();
    setempid("");
  };

  //   useEffect(() => {
  //     axios
  //       .get("http://dummy.restapiexample.com/api/v1/employee/1")
  //       .then((data) => {
  //         console.log(data.data);
  //         setemp(data.data)
  //       })
  //       .catch((error) => console.log(error));
  //     console.log("hio");
  //   }, []);
  console.log({ details });

  const handleEdit = (id) => {
    console.log(id);
    setopenpopup(true);
    // setOpenPopup(true);
    // <Popup openPopup={openPopup} setpenPopup={setopenPopup}>
    //   <EmployeeForm setOpenPopup={setopenPopup}></EmployeeForm>
    // </Popup>;
    axios.get(`/api/v1/employee/${id}`).then((data) => setemp_data(data.data));
  };

  // const classes = useStyles();

  return (
    <div className="emp__details__container">
      <div class="emp__info">
        <div class="emp__img items">
          <img src={details.imageUrl} alt="photo" />

          <div class="">
            <p className="emp_name">{details.name}</p>
            <p className="emp_email">{details.email_id}</p>
          </div>
        </div>
        <p className="items desg">{details.role}</p>
        <p className="items phoneNo">{details.phone_no}</p>
        <p className="items joingDate">{details.joing_date}</p>
        <div class="icons">
          <button
            className="emp_delete"
            onClick={(e) => handleEdit(details._id)}
          >
            <IconButton>
              <EditIcon className="home__icon"></EditIcon>
            </IconButton>
          </button>

          <button
            className="emp_delete"
            onClick={(e) => handleClickOpen(details._id)}
          >
            <IconButton>
              <DeleteIcon className="home__icon"></DeleteIcon>
            </IconButton>
          </button>
        </div>
      </div>

      <Popup openPopup={openpopup} setOpenPopup={setopenpopup}>
        <EmployeeForm
          setOpenPopup={setopenpopup}
          data={emp_data}
        ></EmployeeForm>
      </Popup>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {`Are you sure to delete `}
            <span className="delete__empName">{emp_name}?</span>
          </DialogTitle>
          {/* <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure to Delete employee?
            </DialogContentText>
          </DialogContent> */}
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleAgree} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Emp_details;
