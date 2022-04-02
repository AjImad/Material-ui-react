import * as React from 'react';
import {useState} from 'react';
import { styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {createTheme} from '@mui/material/styles'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Navbar(){

    const [open, setOpen] = useState(false);

    const theme = createTheme({
        breakpoints:{
            values:{
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536
            }
        }
    });

    const style = {
        toolbar:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logoLg:{
            display: 'none',
            [theme.breakpoints.up('sm')]:{
                display: 'block',
            }
        },
        logoSm:{
            display: 'block',
            [theme.breakpoints.up('sm')]:{
                display: 'none',
            }
        },
        searchicon:{
            [theme.breakpoints.up("sm")]:{
                display: 'none'
            }
        },
    }

    const Search = styled('div', {
        shouldForwardProp: (prop) => prop !== "open"
    })( ( {theme, open} ) => ({
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '35ch',
        '& .MuiInputBase-input':{
            color: 'white',
            marginLeft: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]:{
            display: open ? 'flex' : 'none' ,
            width: '30ch'
        }
    }));
      
      
    return(
        <>
        <AppBar sx={{backgroundColor: '#2f2626'}}>
            <Toolbar sx={{...style.toolbar}}>
                <Typography 
                variant="h6"
                sx={{...style.logoLg, color: '#c5aa6a'}}
                >
                    FrontDev
                </Typography>
                <Typography 
                variant="h6"
                sx={{...style.logoSm, color: '#c5aa6a'}}
                >
                    FDEV
                </Typography>
                <Search open={open}>
                    <SearchIcon sx={{color: '#c5aa6a'}}/>
                    <InputBase placeholder='Search...'/>
                    <CancelIcon 
                        sx={{margin: 1, [theme.breakpoints.up("sm")]:{ display: 'none' }, color: '#c5aa6a' }} 
                        onClick={() => {setOpen(!open)}}
                    />
                </Search>
                <Stack spacing={2} direction="row" sx={{display: open ? 'none' : 'flex'}}>
                    <SearchIcon sx={{...style.searchicon, color: '#5f4c4c'}} onClick={(e) => {setOpen(!open)}}/>
                        <Badge badgeContent={4} sx={{color: '#c5aa6a'}}>
                            <MailIcon sx={{color: '#c5aa6a'}} />
                        </Badge>
                        <Badge badgeContent={2} sx={{color: '#c5aa6a'}}>
                            <NotificationsIcon sx={{color: '#c5aa6a'}} />
                        </Badge>
                        <Avatar
                            alt="Ajbar Imad"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            sx={{ width: 30, height: 30 }}
                        />
                </Stack>
            </Toolbar>
        </AppBar>
        </>
    )
}