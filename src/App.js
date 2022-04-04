import * as React from 'react';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Add from './components/Add';
import Grid from '@mui/material/Grid';

export default function App() {

  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2} md={2} lg={2}> <Leftbar/> </Grid>
        <Grid item xs={10} sm={10} md={10} lg={7}> <Feed /> </Grid>
        <Grid item lg={3}> <Rightbar /> </Grid>
      </Grid>
      <Add />
    </>
  );
}


