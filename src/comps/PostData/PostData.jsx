import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Avatar from "@mui/material/Avatar";
import { cover1, avatar1 } from "../../Assets/index";

const PostData = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        backgroundColor: "#fafafa",
        // position: 'fixed',
        width: "17rem",
        marginTop: "3.5rem",
        overFlow: "scroll",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          height: "10rem",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "0 0 1rem 1rem",
          }}
          src={cover1}
          alt=""
        />
        <Avatar
          sx={{
            position: "relative",
            bottom: 45,
            left: "34%",
            width: 85,
            height: 85,
            zIndex: 999,
          }}
          alt="Travis Howard"
          src={avatar1}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0.5rem 0.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="div"></Typography>
          <Typography sx={{ color: "gray" }} variant="p" component="div">
            Following{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="div"></Typography>
          <Typography sx={{ color: "gray" }} variant="p" component="div">
            Followers
          </Typography>
        </Box>
      </Box>

      <Box></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <Typography variant="p" component="div"></Typography>
        <Typography variant="p" component="div">
          |
        </Typography>
        <Typography variant="p" component="div">
          Web Development
        </Typography>
      </Box>
      <Typography
        sx={{ textAlign: "center", color: "gray" }}
        variant="p"
        component="div"
      >
        Lorem ipsum dolor sit amet, consectetur
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "0 1rem",
          marginTop: "1rem",
        }}
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Thoughts"
          multiline
          maxRows={4}
        />

        <Button variant="contained" endIcon={<AddCircleOutlineOutlinedIcon />}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export { PostData };
