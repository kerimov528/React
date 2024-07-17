import { Container, Typography, Box, CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ReactionButton from "./ReactionButton";

const PostBox = ({ posts }) => {
  const { loading, error } = useSelector((state) => state.post);
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' mt={5}>
        Posts
      </Typography>
      {loading && (
        <Box textAlign='center' my={2}>
          <CircularProgress size='40px' />
        </Box>
      )}

      {error && (
        <Box textAlign='center' my={2}>
          <Typography variant='h5' color='error'>
            {error}
          </Typography>
        </Box>
      )}

      {posts.length > 0 &&
        posts.map((post, index) => (
          <Box
            key={index}
            p={2}
            borderRadius={2}
            sx={{
              backgroundColor: "#304463",
              color: "#fff",
              border: "2px solid #000",
            }}
            my={2}
          >
            <Typography variant='h4'>{post.title}</Typography>
            <Box maxWidth='90%'>
              <Typography
                variant='h6'
                sx={{ wordBreak: "break-word", wordSpacing: 0.1 }}
              >
                {post.content}
              </Typography>
            </Box>
            <Typography variant='subtitle1'>by {post.author}</Typography>

            <ReactionButton post={post} />
          </Box>
        ))}
    </Container>
  );
};

export default PostBox;
