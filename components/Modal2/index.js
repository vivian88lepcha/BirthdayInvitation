import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";

const LocationMap = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    p: 3,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  };

  return (
    <div>
      <Button onClick={handleOpen}>Address</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Location Map
          </Typography>
          <button className="event-modal-close" onClick={handleClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="modalBody modal-body">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.2853559318332!2d12.549717076573389!3d55.64924559996303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652559a09ab3af5%3A0xafe05c6fee0961bf!2sSt%C3%B8berigade%2021%2C%202450%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1728326829755!5m2!1sen!2sdk"
              title="Location Map"
            ></iframe>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LocationMap;
