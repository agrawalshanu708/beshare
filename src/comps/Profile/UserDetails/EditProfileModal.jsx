import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EditProfileModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ModeEditOutlineOutlinedIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="standard-basic"
            label="First Name "
            variant="standard"
          />
          <TextField id="standard-basic" label="Last Name" variant="standard" />
          <TextField
            id="standard-basic"
            label="Profession"
            variant="standard"
          />
          <TextField id="standard-basic" label="Email Id" variant="standard" />
          <TextField
            id="standard-basic"
            label="ContacT Number"
            variant="standard"
          />
          <TextField id="standard-basic" label="Website" variant="standard" />
          <TextField
            id="standard-multiline-static"
            label="About Me"
            multiline
            rows={4}
            variant="standard"
          />
          <Button
            sx={{ display: "block", marginTop: "1rem" }}
            open={open}
            onClick = {() => setOpen(false)}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export { EditProfileModal };
