import React from "react";

import {Box,Avatar,Typography,Divider,LanguageOutlinedIcon,PhoneAndroidOutlinedIcon,MarkEmailReadOutlinedIcon} from "../../../utils/MaterialUI"
import { avatar1 } from "../../../Assets/index";
import { useSelector } from "react-redux";
import { EditProfileModal } from "./EditProfileModal";
import {useState } from "react";

const UserDetails = () => {
  const [personalPost, setPersonalPost] = useState([]);
  const [userProfileDetails, setUserProfileDetails] = useState({
    profession: "software developer",
    contactNumber: "9424431504",
    website: "shanuagrawal.com",
    bio: "I am a software developer who is well versed with JavaScript/ES6+ , ReactJS & Redux and an intermediate in UI/UX concepts. I can build web apps and can write modular code for better results. I am always eager to learn new technologies and methodologies",
  });
  const { allPost, userPost } = useSelector((store) => store.posts);
  const { foundUser, token } = useSelector((store) => store.users);

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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              {foundUser.firstName} {foundUser.lastName}{" "}
            </Typography>
            <EditProfileModal
              userProfileDetails={userProfileDetails}
              setUserProfileDetails={setUserProfileDetails}
              foundUser={foundUser}
            />
          </Box>
          <Typography variant="h6" component="div" sx={{ color: "gray" }}>
            {userProfileDetails.profession}
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
            {userPost.length}
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
            {foundUser.followers.length}
          </Typography>
          <Typography sx={{ color: "gray" }} variant="p" component="div">
            Followers
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: "1rem" }} />
      <Box>
        <Typography sx={{ margin: "0.5rem 1rem" }} variant="h6" component="div">
          About Me
        </Typography>
        <Typography
          sx={{ color: "gray", textAlign: "center", margin: "0 1rem" }}
          variant="p"
          component="div"
        >
          {userProfileDetails.bio}
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
            {userProfileDetails.website}
          </Typography>
        </Box>
        <Box>
          <MarkEmailReadOutlinedIcon />
          <Typography
            sx={{ margin: "0.5rem 1rem" }}
            variant="p"
            component="span"
          >
            {foundUser.username}
          </Typography>
        </Box>
        <Box>
          <PhoneAndroidOutlinedIcon />
          <Typography
            sx={{ margin: "0.5rem 1rem" }}
            variant="p"
            component="span"
          >
            {userProfileDetails.contactNumber}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export { UserDetails };
