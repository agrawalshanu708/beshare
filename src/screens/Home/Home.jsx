import React from "react";
import { PostData, FeedTabs, FollowUser } from "../../comps/index";
import { Grid, Box } from "../../utils/MaterialUI";

const Home = () => {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        width: "97vw",
        height: "100vh",
        padding: "0 0.5rem",
      }}
    >
      <Box>
        <PostData />
      </Box>

      <Box>
        <FeedTabs />
      </Box>

      <Box>
        <FollowUser />
      </Box>
    </Box>
  );
};

export { Home };
