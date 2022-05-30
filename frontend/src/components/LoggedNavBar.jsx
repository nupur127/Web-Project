import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Grid, Typography, Toolbar, Button, MenuItem, Avatar, Menu } from '@mui/material';
import { UserContext } from '../context/UserContext';
function LoggedNavBar({name}) {
  const { logout, getUserStatus } = React.useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">ABC</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Welcome Username!</Typography>
            </Grid>
            <Grid item>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ backgroundColor: "transparent", color: "white" }}
              >
                <Avatar>{name}</Avatar>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => {logout();console.log(getUserStatus());navigate("/");}}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  )
}

export default LoggedNavBar