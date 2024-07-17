import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import MainForm from './Components/AddPostForm';
import PostBox from './Components/PostBox';
import { useSelector } from 'react-redux';
import { allPosts } from './Store/features/postSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './Store/features/postSlice';
import Header from './Components/Header';

function App() {
  const posts = useSelector(allPosts);
  console.log("🚀 ~ App ~ posts:", posts)
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      console.log("fetching posts")
      dispatch(fetchPosts());
    }
  }, [posts]);
  return (

    <Container maxWidth='lg' sx={{ borderLeft: "2px solid grey", borderRight: "2px solid grey", minHeight: '100vh' }}>
      <Header />
      <MainForm />

      <PostBox posts={posts} />
    </Container>
  );
}

export default App;
