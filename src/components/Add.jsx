import * as React from 'react';
import { useState } from 'react';
import { Fab, TextField, Tooltip, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { Box, createTheme } from '@mui/system';

export default function Feed() {
    
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

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
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 500,
        bgcolor: 'background.paper',
        backgroundColor: '#fff',
        p: 4,
        [theme.breakpoints.down('sm')]:{
            width: '100vw',
            height: '100vh',
        }
      };

  return (
    <>
     <Tooltip title="Add" onClick={() => {  setOpen(!open) }}>
        <Fab 
            size='small'
            sx={{
                backgroundColor: '#2f2626',
                color: '#c5aa6a',
                position: 'fixed',
                right: 20,
                bottom: 20
            }}
        >
            <AddIcon />
        </Fab>
     </Tooltip>
     <Modal open={open} onClose={handleClose}>   
        <Box 
            sx={style} 
            component="form"
            noValidate
            autoComplete='off'    
        >
            <TextField color="warning" id="outlined-basic" label="Title" variant="standard" sx={{width: '100%'}} />
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Tell Your Story..."
                color="warning"
                sx={{width: '100%'}}
            />
        </Box>
    </Modal>
    </>
  );
}