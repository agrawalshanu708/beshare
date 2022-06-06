import React, { useState,useEffect } from "react";
import {Avatar,Button,TextField,Typography,Box,AddCircleOutlineOutlinedIcon} from "../../utils/MaterialUI"
import { cover1, avatar1 } from "../../Assets/index";
import { useDispatch, useSelector } from "react-redux";
import { createPostHandler, getAllPost } from "../../redux/slice/post/postServices";
import { useNavigate } from "react-router-dom";

const PostData = () => {
  const [post, setPost] = useState("");
  const {allUser, foundUser, token } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postHandler = async () => {
    await dispatch(createPostHandler({ postContent: post, token }));
    await dispatch(getAllPost())
  };
    
  return (
    <Box
      sx={{
        height: "82vh",
        backgroundColor: "#fafafa",
        position: 'fixed',
        width: "17rem",
        marginTop: "5.5rem",
        overflow: "auto",
        // backgroundColor: "#ffffff",
        marginLeft: "0.5rem"
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
            {foundUser.following.length}
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
            {foundUser.followers.length}
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
