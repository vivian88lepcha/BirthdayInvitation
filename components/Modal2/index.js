

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 3,
};


export default function LocationMap() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Location Map
          </Typography>
          <button className='event-modal-close' onClick={handleClose}><i className='fa fa-close'></i></button>
          <div className="modalBody modal-body">
            <div className="modalBody modal-body">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.8149675545869!2d12.554422469676236!3d55.6496888983154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525482a7301f5b%3A0x1a7e1c31e20bc3b5!2sTeglholmsgade%2070A%2C%202450%20K%C3%B8benhavn%20SV!5e0!3m2!1sen!2sdk!4v1696264316685!5m2!1sen!2sdk"></iframe>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}


