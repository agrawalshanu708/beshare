import * as React from "react";
import {
  TextField,
  Button,
  Box,
  Modal,
  ModeEditOutlineOutlinedIcon,
} from "../../../utils/MaterialUI";
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
  display: "grid",
  gridTemplateColumns: "200px 200px",
  gap: "1rem",
};

function EditProfileModal({
  userProfileDetails,
  setUserProfileDetails,
  user,
}) {
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
            value={user.firstName}
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            value={user.lastName}
          />
          <TextField
            id="standard-basic"
            label="Profession"
            variant="standard"
            value={user.bio}
            onChange={(e) =>
              setUserProfileDetails((prev) => ({
                ...prev,
                profession: e.target.value,
              }))
            }
          />
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="standard"
            value={userProfileDetails.contactNumber}
            onChange={(e) =>
              setUserProfileDetails((prev) => ({
                ...prev,
                contactNumber: e.target.value,
              }))
            }
          />
          <TextField
            id="standard-multiline-static"
            label="About Me"
            multiline
            rows={4}
            variant="standard"
            value={userProfileDetails.bio}
            onChange={(e) =>
              setUserProfileDetails((prev) => ({
                ...prev,
                bio: e.target.value,
              }))
            }
          />
          <Button
            sx={{ display: "block", marginTop: "1rem" }}
            open={open}
            onClick={() => {
              setOpen(false);
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export { EditProfileModal };
