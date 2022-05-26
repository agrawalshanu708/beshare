import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import { avatar1 } from "../../../Assets/index";
import { useSelector } from "react-redux";
import {EditProfileModal} from "./EditProfileModal"
const UserDetails = () => {
//   const { user, token } = useSelector((store) => store.auth);
//   const { allPost } = useSelector((store) => store.posts);
//   const personalPost = allPost.filter((el) => el.userId === user._id);

  return (
    <Box
      sx={{
        height: "100vh",
        position: "absolute",
        zIndex: "9",
        top: "12rem",
        left: "1.5rem",
        width: "21rem",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          margin: "1rem 0",
        }}
      >
        <Avatar
          sx={{
            width: 85,
            height: 85,
          }}
          alt="Travis Howard"
          src={avatar1}
        />

        <Box>
          <Box  sx = {{display:"flex", justifyContent:"space-between"}}>
          <Typography variant="h6" component="div">
            {/* {user.firstName} {user.lastName}{" "} */}
            shanu agrawal
          </Typography>
            <EditProfileModal/>
            </Box>
          <Typography variant="h6" component="div" sx={{ color: "gray" }}>
            Web Developer
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: "1rem" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem 0.5rem",
          gap: "2rem",
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
            {" "}22
            {/* {user.following.length}{" "} */}
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
            {/* {personalPost.length} */}33
          </Typography>
          <Typography sx={{ color: "gray" }} variant="p" component="div">
            Post
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
            {/* {user.followers.length} */}33
          </Typography>
          <Typography sx={{ color: "gray" }} variant="p" component="div">
            Followers
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: "1rem" }} />
      <Box>
        <Typography sx={{ margin: "0.5rem 1rem" }} variant="h6" component="div">
          About Me{" "}
        </Typography>
        <Typography
          sx={{ color: "gray", textAlign: "center", margin: "0 1rem" }}
          variant="p"
          component="div"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          doloribus obcaecati alias labore cum quasi. Quam nostrum minima esse
          soluta.{" "}
        </Typography>
      </Box>
      <Divider sx={{ margin: "1rem" }} />
      <Box sx={{ margin: "1rem 0 " }}>
        <Typography sx={{ margin: "0.5rem 1rem" }} variant="h6" component="div">
          Contact Me
        </Typography>
        <Box>
          <LanguageOutlinedIcon />
          <Typography
            sx={{ margin: "0.5rem 1rem" }}
            variant="p"
            component="span"
          >
            www.shanuagrawal.com
          </Typography>
        </Box>
        <Box>
          <MarkEmailReadOutlinedIcon />
          <Typography
            sx={{ margin: "0.5rem 1rem" }}
            variant="p"
            component="span"
          >
            agrawalshanu798@gmail.com
          </Typography>
        </Box>
        <Box>
          <PhoneAndroidOutlinedIcon />
          <Typography
            sx={{ margin: "0.5rem 1rem" }}
            variant="p"
            component="span"
          >
            +91 9424431504
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export {UserDetails}