import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Sanupic from "../../images/profile.jpg";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import { useEffect } from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
// import { Gettoken } from "../Api/StoreToken/StoreToken";

// const pages = ["Home", "Track expences", "Show expences"];
const settings = ["Profile"];
function Navbar(props) {
  // use effect starts
  // useEffect(() => {
  //   if (window.screen.width <= 768) {
  //     if (!pages.includes("create account")) {
  //       pages.push("create account");
  //     }
  //   }
  //   //  console.log("hi boys");
  // }, []);
  // use effect ends
  // useEffect(()=>{
  //   Gettoken();
  //   },[]);
  //   const token =Gettoken();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // const [modeio, setmodeio] = useState(false);
  const theme = createTheme({
    palette: {
      mode: "light",
      // mode:modeio?'dark':'light',
    },
  });
  


  //get token
 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: "orange" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* will fix icon in next commit */}
            {/* <img  src={Icon}/> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  
                }}
              >
                {props.pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex" }, mr: 1 }} /> */}
            <div style={{marginRight:'7px'}}><svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#000000" stopColor="#000000"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#fff" stopColor="#fff"></path> </svg></div>
            
            <Typography
            className="econimizing"
              variant="h5"
              noWrap
              // component="a"
              href=""
              sx={{
                mr: 5,
                display: { xs: "flex"},
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Economizing
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {props.pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                  <Link style={{ textDecoration: "none", color: "white",fontWeight:"600" }} to={`/${page}`}>
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>
           
            {/* <Modal /> */}
            {/* {window.screen.width > 768?<Modal />:<></>} */}
            {props.profile?<Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={Sanupic} />
                </IconButton>
              </Tooltip>
              {/* <Switch  checked={modeio} onChange={()=>setmodeio(!modeio)}/> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"><Link style={{ textDecoration: "none", color: "black" }}
                    to={`/${setting}`}>{setting}</Link></Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>:null}
            
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
