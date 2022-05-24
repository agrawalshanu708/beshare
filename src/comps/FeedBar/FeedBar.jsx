import * as React from "react";
import Box from "@mui/material/Box";
import { FeedCard } from "./FeedCard";

function FeedBar() {


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "3.5rem",
        }}
      >
        <FeedCard/>
      </Box>
    </>
  );
}

export { FeedBar };
