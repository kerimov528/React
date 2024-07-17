import { TextField, Box, Stack, Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { addPosts } from "../Store/features/postSlice";
import { useDispatch } from "react-redux";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm();

  const submitForm = (data) => {
    const addedPost = dispatch(addPosts(data));
  };

  return (
    <Container maxWidth='sm'>
      <Box component='form' onSubmit={handleSubmit(submitForm)}>
        <Stack gap={2}>
          <Controller
            name='title'
            control={control}
            render={({ field: { ref, value, onChage, ...fields } }) => {
              return <TextField label='Post Title' {...fields} />;
            }}
          />

          <Controller
            name='author'
            control={control}
            render={({ field: { ref, value, onChage, ...fields } }) => {
              return <TextField label='Author' {...fields} />;
            }}
          />

          <Controller
            name='content'
            control={control}
            render={({ field: { ref, value, onChage, ...fields } }) => {
              return <TextField label='Post Content' {...fields} />;
            }}
          />

          <Button variant='contained' color='primary' type='submit'>
            Save Post
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default AddPostForm;
