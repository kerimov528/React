import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../Store/features/postSlice";
import { Button, Box } from "@mui/material";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        sx={{ margin: 0, padding: 0 }}
        key={name}
        type='button'
        disableTouchRipple
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </Button>
    );
  });

  return <Box>{reactionButtons}</Box>;
};

export default ReactionButton;
