import React from "react";
import { PostData, FeedTabs, FollowUser } from "../../comps/index";
import {Grid,Box} from "../../utils/MaterialUI";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box>
          <PostData />
        </Box>
      </Grid>

      <Grid item xs={5}>
        <Box>
          <FeedTabs />
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box>
          <FollowUser />
        </Box>
      </Grid>
    </Grid>
  );
};

export { Home };
