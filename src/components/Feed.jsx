import * as React from 'react';
import Container from '@mui/material/Container'
import Post from './Post'

export default function Feed() {
  return (
    <>
      <Container sx={{height: '100vh', paddingTop: {xs: 9, sm: 10, md: 10}}}>
        <Post />
        <Post />
      </Container>
    </>
  );
}