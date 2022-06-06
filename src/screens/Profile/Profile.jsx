import React from "react";
import {Grid,Box} from "../../utils/MaterialUI";

import {
  UserCover,
  UserDetails,
  UserAllPost,
  ProfileTabs,
} from "../../comps/index";
const Profile = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <UserCover />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <UserDetails />
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box>
            <ProfileTabs />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Profile };
