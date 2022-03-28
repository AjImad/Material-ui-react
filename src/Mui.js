// import React, {useState} from 'react'
// import logo from './logo.svg';
// import Button from '@mui/material/Button'
// import Masonry from '@mui/lab/Masonry';
// import Box from '@mui/material/Box';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import SendIcon from '@mui/icons-material/Send'
// import AlarmIcon from '@mui/icons-material/Alarm'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
// import IconButton from '@mui/material/IconButton'
// import DeleteIcon from '@mui/icons-material/Delete'
// import Checkbox from '@mui/material/Checkbox'
// import Favorite from '@mui/icons-material/Favorite'
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
// import TextField from '@mui/material/TextField'
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Input from '@mui/material/Input';
// import LoginIcon from '@mui/icons-material/Login';

// function Mui() {

//   const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(0.5),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

//   const CheckedExample = () => {
//     const [checked, setChecked] = useState(true);
//     return (
//       <div>
//         <Checkbox defaultChecked color='secondary' lable="label"/>
//         <Checkbox defaultChecked color='success'/>
//         <Checkbox disabled checked color='error'/>
//         <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite />} color='error'/>
//       </div>
//     )
//   }
//   const [Values, setValues] = useState({
//     username:'',
//     password: '',
//     showPassword: false,
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...Values, [prop]: event.target.value});
//   };

//   const handleInput = (prop) => (e) => {
//     setValues({...Values, [prop]: e.target.value})
//   }

//   const handleClickShowPassword = () => {
//     setValues({
//       ...Values,
//       showPassword: !Values.showPassword,
//     });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };


//   return (
//     <div className="App" >
//       <header className="App-header">

//       <FormControl sx={{ m: 2, width: '25ch' }} variant="standard">
//         <InputLabel htmlFor="input-with-icon-adornment">
//           Username
//         </InputLabel>
//         <Input
//           onChange={handleInput('username')}
//           id="input-with-icon-adornment"
//           startAdornment={
//             <InputAdornment position="start">
//               <AccountCircle />
//             </InputAdornment>
//           }
//         />
//       </FormControl>

//       <FormControl sx={{ mb: 2, width: '25ch' }} variant="outlined">
         
//           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={Values.showPassword ? 'text' : 'password'}
//             value={Values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {Values.showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//         </FormControl>

//         <Button size='small' variant='outlined' endIcon={<LoginIcon />} onClick={() => {alert('user: ',Values.username);console.log('user',Values.username ,'pass :',Values.password)} }>
//             Login
//         </Button>

//         <CheckedExample />

//         <Box component='form' sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//         }}>
//           <TextField type='time' size='small' variant='filled' label='filled' color='secondary'/>
//           <TextField type='email' variant='outlined' label='outlined' color='success'/>
//           <TextField type='file' variant='standard' label='standard' color='error'/>
//         </Box>

//         <ButtonGroup size='small' variant='text'>
//           <Button 
//             color='success'
//             style={{
//               fontSize: 10
//             }}
//             onClick={() => {alert('you clicked here yoo')}}
//             endIcon={<AlarmIcon />}
//           >Add Cart</Button>
//           <Button 
//             color='error'
//             endIcon={<DeleteIcon/>}
//           >Delete
//           </Button>
//           <Button 
//             color='primary'
//             startIcon={<SendIcon />}
//           >SEND
//           </Button>
//         </ButtonGroup>

//         <Stack direction='row' spacing={2}>
//           <IconButton color='primary' size='large'>
//             <SendIcon />
//           </IconButton>
//           <IconButton color='secondary' size='large'>
//             <AlarmIcon />
//           </IconButton>
//           <IconButton color='success' size='large'>
//             <AddShoppingCartIcon />
//           </IconButton>
//           <IconButton color='error' size='large' >
//             <DeleteIcon />
//           </IconButton>
//         </Stack>

//         <img src={logo} className="App-logo" alt="logo" />

//       </header>
//     </div>
//   );
// }

// export default Mui;
