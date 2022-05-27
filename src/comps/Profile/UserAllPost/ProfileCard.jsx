import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Typography from "@mui/material/Typography";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { EditPostModal } from "./EditPostModal";
function ProfileCard({ post }) {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <CardContent
        sx={{
          flexGrow: "1",
          padding: "1rem",
          maxHeight: "180px",
          overflow: "auto",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <Box
        sx={{
          padding: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 1rem",
        }}
      >
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          {/* <ThumbUpIcon  /> */}
          <ThumbUpOutlinedIcon />
          <CommentOutlinedIcon />
          <BookmarkAddOutlinedIcon />
        </Box>
        <EditPostModal />
      </Box>
    </Card>
  );
}
export { ProfileCard };
