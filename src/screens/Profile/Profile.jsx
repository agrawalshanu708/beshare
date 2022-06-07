import React from "react";
import {Grid,Box} from "../../utils/MaterialUI";

import {
  UserCover,
  UserDetails,
  UserAllPost,
  ProfileTabs,
} from "../../comps/index";
 import {useParams} from "react-router-dom"

const Profile = () => {
  const {userId} = useParams();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <UserCover userId = {userId} />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <UserDetails userId = {userId} />
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box>
            <ProfileTabs  userId = {userId} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Profile };
