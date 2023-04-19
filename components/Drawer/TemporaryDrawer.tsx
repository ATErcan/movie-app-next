"use client";

import { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ResponsiveAppBar from "./ResponsiveAppBar";

import { data as drawerData } from "./drawerData";

const TemporaryDrawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="bg-neutral-950 h-screen text-white"
    >
      <List>
        {drawerData.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton className="hover:bg-neutral-800">
              <ListItemIcon className="text-white">{<item.icon className="text-xl"/>}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Fragment>
          <ResponsiveAppBar toggleDrawer={toggleDrawer} />
        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Fragment>
    </div>
  );
};

export default TemporaryDrawer;
