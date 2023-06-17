import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from '../../Images/logo.svg';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ paddingBottom: "64px" }}>
        <AppBar component={"nav"} sx={{ bgcolor: "black", position: "fixed" }}>
          {/* Toolbar applies css so that building navbar is more convinient */}
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              onClick={() => {
                setDrawerOpen(true);
              }}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Side bar for when the screen is xs */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              width={3}
            >
              <Box p={2} width="250px" textAlign="center" role="presentation">
                <Typography variant="h6" component="div">
                  Side Panel
                </Typography>

                {/* Group of Buttons  */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Button variant="text" component={Link} to="/">
                    Home
                  </Button>

                  <Button variant="text" component={Link} to="/about">
                    About
                  </Button>

                  <Button variant="text" component={Link} to="/contact">
                    Contact
                  </Button>

                  <Button variant="text" component={Link} to="/Menu">
                    Menu
                  </Button>
                </Box>
              </Box>
            </Drawer>

            {/* Logo Icon  */}
            <Typography
              color={"goldenrod"}
              component={"div"}
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="Logo" height={'70'} width='250px'></img>
            </Typography>

            {/* Hides the links in the navbar when screen is xs  */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                variant="text"
                sx={{ color: "white" }}
                component={Link}
                to="/"
              >
                Home
              </Button>

              <Button
                variant="text"
                sx={{ color: "white" }}
                component={Link}
                to="/about"
              >
                About
              </Button>

              <Button
                variant="text"
                sx={{ color: "white" }}
                component={Link}
                to="/contact"
              >
                Contact
              </Button>

              <Button
                variant="text"
                sx={{ color: "white" }}
                component={Link}
                to="/Menu"
              >
                Menu
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
