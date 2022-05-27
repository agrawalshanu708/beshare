import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Avatar from "@mui/material/Avatar";
import { cover1, avatar1 } from "../../Assets/index";
import { useDispatch, useSelector } from "react-redux";
import { createPostHandler } from "../../redux/slice/post/postServices";
import { TokenOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PostData = () => {
  const [post, setPost] = useState("");
  const { foundUser, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postHandler = () => {
    dispatch(createPostHandler({ postContent: post, token }));
  };
  // console.log(foundUser)
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
          onClick = {() => navigate("/profile")}

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
          <Typography variant="h6" component="div">
            {foundUser.following}
          </Typography>
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
          <Typography variant="h6" component="div">
            {foundUser.followers}
          </Typography>
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
        <Typography variant="p" component="div">
          {foundUser.firstName} {foundUser.lastName}
        </Typography>
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
          onChange={(e) => setPost(e.target.value)}
        />

        <Button
          variant="contained"
          endIcon={<AddCircleOutlineOutlinedIcon />}
          onClick={postHandler}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export { PostData };
