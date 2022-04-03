import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const MyItems = styled('div')( ({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(0),
  [theme.breakpoints.up("sm")]:{
    marginBottom: theme.spacing(3),
    cursor: 'pointer'
  },
  '& .MuiTypography-root':{
    color: '#e8d9ce',
    marginLeft: theme.spacing(1),
    fontWeight: 500,
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    },
    [theme.breakpoints.down('md')]:{
      display: 'none'
    },
  },
  '& .MuiSvgIcon-root':{
    color: '#c5aa6a',
    [theme.breakpoints.up('sm')]:{
      fontSize: "20px"
    },
    [theme.breakpoints.down('md')]:{
      fontSize: "30px"
    },
  }
}))

const Container = styled('div')( ({theme})=>({
  position: 'fixed', top:0, left: 0,
  height: '100vh',
  padding: theme.spacing(3),
}));


export default function Leftbar() {
  return (
    <>
      <Container
        sx={{
          paddingTop: {xs: 9, sm: 10, md: 10},
          backgroundColor: '#2f2626',
          
          }}>
        <MyItems >
          <HomeIcon/>
          <Typography >HomePage</Typography>
        </MyItems>
        <MyItems >
          <GroupIcon />
          <Typography >Friends</Typography>
        </MyItems>
        <MyItems >
          <FormatListBulletedIcon />
          <Typography >Lists</Typography>
        </MyItems>
        <MyItems >
          <CameraAltIcon />
          <Typography >Camera</Typography>
        </MyItems>
        <MyItems >
          <SlowMotionVideoIcon />
          <Typography >Videos</Typography>
        </MyItems>
        <MyItems >
          <PhoneIphoneIcon />
          <Typography >Apps</Typography>
        </MyItems>
        <MyItems >
          <BookmarkIcon />
          <Typography >Collections</Typography>
        </MyItems>
        <MyItems >
          <StorefrontIcon />
          <Typography >Market Place</Typography>
        </MyItems>
        <MyItems >
          <SettingsIcon />
          <Typography >Settings</Typography>
        </MyItems> 
        <MyItems >
          <ExitToAppIcon />
          <Typography >Logout</Typography>
        </MyItems>

      </Container>
    </>
  );
}