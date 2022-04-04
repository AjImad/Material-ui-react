import * as React from 'react';
import { useState } from 'react';
import { Button, Fab, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Snackbar, TextField, Tooltip } from '@mui/material';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { Box, createTheme } from '@mui/system';
import MuiAlert from '@mui/material/Alert';

export default function Feed() {
    
    const [open, setOpen] = useState(false)
    
    const handleClose = () => setOpen(false);

    const [openAlert, setOpenAlert] = useState(false)

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };

    const [visible, setVisible] = React.useState('');

    const handleChange = (event) => {
        setVisible(event.target.value);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

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
        height: 550,
        bgcolor: 'background.paper',
        backgroundColor: 'white',
        p: 3,
        borderRadius: 3,
        [theme.breakpoints.down('sm')]:{
            width: '100vw',
            height: '100vh',
        },
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
            <TextField id="outlined-basic" label="Title" variant="standard" sx={{width: '100%', mb: 3}} />
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Tell Your Story..."
                sx={{width: '100%', mb: 3}}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, mb: 3, ml: {xs: 3}}}>
                <InputLabel id="demo-simple-select-filled-label">Visibility</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={visible}
                onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Public">Public</MenuItem>
                    <MenuItem value="Private">Private</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{display: 'block', mb: 3, ml: {xs: 3}}}>
                <FormLabel id="demo-radio-buttons-group-label">Who can comment?</FormLabel>
                <RadioGroup>
                    <FormControlLabel value="Everybody" control={<Radio />} label="Everybody" />
                    <FormControlLabel value="My Friends" control={<Radio />} label="My Friends" />
                    <FormControlLabel value="Nobody" control={<Radio />} label="Nobody" />
                    <FormControlLabel value="Custom" disabled control={<Radio />} label="Custom (Premuim)" />
                </RadioGroup>
            </FormControl>
            <Button 
                variant="contained" color="primary" 
                sx={{mr: 3, ml: {xs: 3}}}
                onClick={() => {setOpenAlert(true)}}
                >Create</Button>
            <Button 
                variant="outlined" color="error"
                onClick={() => {handleClose()}}
            >Cancel
            </Button>
        </Box>
     </Modal>
     <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}