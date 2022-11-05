import { Avatar, Badge, Box, InputBase, Menu, styled, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PetsIcon from '@mui/icons-material/Pets';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
}) 


const Search = styled("div")(({theme}) =>  ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%"
}))

const Icons = styled(Box)(({theme}) =>  ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] : {
    display: "flex"
  }
}))


const UserBox = styled(Box)(({theme}) =>  ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] : {
    display: "none"
  }
}))


function Navbar() {

  const[open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar sx={{position: "sticky"}}>
        <StyledToolbar>
            <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}} >Responsive Design</Typography>
            <PetsIcon sx={{display: {xs: "block", sm: "none"}}} />
            <Search>
              <InputBase sx={{width: "100%"}} type="text" placeholder="Search" />
            </Search>
            <Icons>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
              <Avatar alt="Remy Sharp" src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" />
            </Icons>
            <UserBox>
              <Avatar onClick = {() => setOpen(true)} alt="Remy Sharp" src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" />
              <Typography variant="span">Santosh</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar