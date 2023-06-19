import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Menu, MenuItem, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { grey, yellow } from '@mui/material/colors';
import SignIn from "../Signin/Signin";
import LogoutReal from "../LogoutReal/LogoutReal";
import { useState } from 'react';

const theme = createTheme();

const useStyles = makeStyles({
  inputContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  setColor: {
    grey: {
      main: grey[900],
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 2,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '0 22px',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    color: 'black',
    flexGrow: 1,
  },
  barColor: {
    background: 'linear-gradient(45deg, #FFFFFF 30%, #FFFFFF 90%)',
    marginBottom: theme.spacing(40)
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(40),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.9)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),
    marginTop: theme.spacing(12),
    color: 'white',
  },
  buttons: {
    color: '#FFFFFF',
  },
  menu: {
    color: '#FFFFFF',
  },
  badge: {
    color: yellow[800]
  },
});

function NavBar() {
  const { user } = useSelector(state => state.usersReducer)

  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);


  const [anchor, setAnchor] = useState(null);
  
  const profileOpen = Boolean(anchor);
  const Click = (event) => {
    setAnchor(event.currentTarget);
  };
  const Close = () => {
    setAnchor(null);
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const dialogClickOpen = () => {
    setDialogOpen(true);
  }
  const dialogClickClose = () => {
    setDialogOpen(false);
  }


  return (
<ThemeProvider theme={theme}>
<AppBar className={classes.barColor} position='fixed'>
     <Container fixed>
        <Toolbar>
        <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} edge="start" color={classes.setColor.grey} aria-label="menu">
          <MenuIcon fontSize="large" mr={12}/>
        </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <MenuItem style={{fontSize: '20px'}} onClick={()=>  {navigate('/');handleClose()}}>Главная</MenuItem>
        <MenuItem style={{fontSize: '20px'}} onClick={()=>  {navigate('/info');handleClose()}}>Инфо</MenuItem>
        <MenuItem style={{fontSize: '20px'}} onClick={()=>  {navigate('/reviews');handleClose()}}>Отзывы</MenuItem>
      </Menu>
      <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }} className={classes.title}>SneakersMania </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title="Account settings">
          <IconButton
              onClick={Click}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={profileOpen ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={profileOpen ? 'true' : undefined}
          >
          <Avatar /> 
          </IconButton>
        </Tooltip>
      <Cart/>
      </Box>
      <Menu
        anchorEl={anchor}
        id="account-menu"
        open={profileOpen}
        onClose={Close}
        onClick={Close}
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
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        { (!user.isActivated) ?
        <><MenuItem onClick={() => { handleClose(); dialogClickOpen(); } }>
                  <div style={{ fontSize: '19px' }}>Войти</div>
                </MenuItem><MenuItem>
                    <div style={{ fontSize: '19px' }} onClick={() => { navigate('/signup'); handleClose(); } }>Регистрация</div>
                  </MenuItem></> :
        <><MenuItem>
                  <Avatar /> <div onClick={() => { navigate('/profile'); handleClose(); } }>Мой аккаунт</div>
                </MenuItem><Divider /></>
        }      
        
          <LogoutReal />
    

      </Menu>
        </Toolbar>
     </Container>
    <Box mr={3}>
    <Dialog open={dialogOpen} onClose={dialogClickClose} arial-labelledby="from-dialog-title">
        <DialogTitle  id="from-dialog-title">Авторизация</DialogTitle>
        <DialogContent className={classes.inputContainer}>
          <SignIn setDialogOpen={setDialogOpen}/>
          <Button style={{marginTop: '30px', marginLeft: '20px'}} size={'small'} onClick={dialogClickClose} color="inherit" variant="outlined">Закрыть</Button>
        </DialogContent>
     </Dialog>
    </Box>
    </AppBar>
</ThemeProvider>
  );
}
export default NavBar;
