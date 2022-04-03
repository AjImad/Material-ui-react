import * as React from 'react';
import Container from '@mui/material/Container';

export default function Rightbar() {
  return (
    <>
      <Container sx={{height: '100vh', paddingTop: {xs: 9, sm: 10, md: 10}, display: {xs: 'none', sm:'block',} }}>Rightbar</Container>
    </>
  );
}