"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { BiMenu } from "react-icons/bi";
import { useAuth } from "../Supabase/auth-provider";
import { useSupabase } from "../Supabase/supabase-provider";
import { toastError, toastSuccess } from "../Toast/ToastNotify";

const settings = ["Logout"];

interface IAppBar {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const MoviesAppBar = ({ toggleDrawer }: IAppBar) => {
  const { user } = useAuth();
  const { supabase } = useSupabase();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toastError(error.message);
    } else {
      toastSuccess("Logged Out Successfully!");
    }
  };

  return (
    <AppBar
      position="absolute"
      className="bg-transparent flex flex-row left-0 right-0 shadow-none"
    >
      <Button className="text-white p-0" onClick={toggleDrawer(true)}>
        <BiMenu className="text-3xl hover:opacity-90" />
      </Button>
      <Container maxWidth="xl" className="mr-0">
        <Toolbar disableGutters className="flex justify-end">
          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
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
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    disableGutters
                  >
                    <Typography
                      textAlign="center"
                      className="px-4"
                      onClick={signOut}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MoviesAppBar;