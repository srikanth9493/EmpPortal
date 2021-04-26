import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./Popup.css";
function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      // onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <div className="header">
          <h1>Employee Form</h1>
          <IconButton>
            <HighlightOffIcon
              className="header_icon"
              onClick={() => setOpenPopup(false)}
            ></HighlightOffIcon>
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText> */}
        {children}
      </DialogContent>
      {/* <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions> */}
    </Dialog>
  );
}

export default Popup;
