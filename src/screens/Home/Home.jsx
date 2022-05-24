import React from "react";
import { PostData,FeedBar,FollowUser} from "../../comps/index";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
          <FeedBar />
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

export  {Home};
