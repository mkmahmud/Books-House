import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { UserAuth } from '../../../Context/AuthContext/AuthContext';
import logo from '../../../Assetes/book.png'
import BookIcon from '@mui/icons-material/Book';
import { Book } from '@mui/icons-material';



const Nav = () => {

    const { user, logOut, databaseUserInfo } = useContext(UserAuth);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const menus = <>

        <Box Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', textAlign: 'center' }
        }>
            <Stack direction='row' spacing={2}>

                {
                    databaseUserInfo?.role === 1 ? <Button sx={{ minWidth: 100, '&:hover': { backgroundColor: '#e72971', } }} variant='contained'><Link to='/sellbook'>Sell Book</Link> </Button> : ''
                }

                {
                    databaseUserInfo?.role === 0 ? <Button sx={{ minWidth: 100, '&:hover': { backgroundColor: '#2f0152', } }} color='secondary' variant='contained'><Link to='/pendingaproval'>Pending Aproval</Link> </Button> : ''
                }

            </Stack>
            {
                user ?
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}> <img src={databaseUserInfo?.image ? databaseUserInfo.image : 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='} alt="" /> </Avatar>
                        </IconButton>
                    </Tooltip>
                    :
                    ''
            }
        </Box >
        {
            user ?

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }
                    }
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                    <MenuItem sx={{ '&:hover': { backgroundColor: '#e72971', color: 'white' } }}>
                        <Avatar /> <Link to='/myaccount'>My account</Link>
                    </MenuItem>

                    {
                        databaseUserInfo?.role === 1 ?
                            <MenuItem sx={{ '&:hover': { backgroundColor: '#e72971', color: 'white' } }}>
                                <Book></Book> <Link to='/myAdded'>My Added</Link>
                            </MenuItem>
                            :

                            <MenuItem sx={{ '&:hover': { backgroundColor: '#e72971', color: 'white' } }}>
                                <Book></Book> <Link to='/mybooked'>My Booked</Link>
                            </MenuItem>
                    }


                    <Divider />
                    <MenuItem sx={{ '&:hover': { backgroundColor: '#e72971', color: 'white' } }}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem sx={{ '&:hover': { backgroundColor: '#e72971', color: 'white' } }}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem sx={{ '&:hover': { backgroundColor: '#e72971', color: 'white' } }}>
                        <div onClick={() => logOut()}>
                            Logout
                        </div>
                    </MenuItem>
                </Menu >
                :
              <Box sx={{ display: 'flex', alignItems: 'center'}}>
                  <Stack direction='row' spacing={2}>
                    <Button sx={{ minWidth: 100, }} variant='outlined'><Link to='/sellbook'>Help</Link> </Button>
                    <Button sx={{ minWidth: 100, '&:hover': { backgroundColor: 'deepgreen', } }} color='success' variant='contained'><Link to='/sellbook'>Sign In</Link> </Button>
                </Stack>
              </Box>
        }

    </>

    return (
        <div className=' flex justify-between px-5 py-2 bg-[#150050] text-white'>
            <Link to='/'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="" style={{ height: '60px' }} />
                    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>BookHouse</Typography>
                </Box>
            </Link>
            {
             databaseUserInfo &&  menus
            }

        </div>
    );
};

export default Nav;