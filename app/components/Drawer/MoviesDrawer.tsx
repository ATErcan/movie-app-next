"use client";

import { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { data as drawerData } from "./drawerData";
import Link from "next/link";
import MoviesAppBar from "./MoviesAppBar";

const MoviesDrawer = () => {
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
            <Link href={item.path} className="w-full">
              <ListItemButton className="hover:bg-neutral-800">
                <ListItemIcon className="text-white">
                  {<item.icon className="text-xl" />}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Fragment>
        <MoviesAppBar toggleDrawer={toggleDrawer} />
        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Fragment>
    </div>
  );
};

export default MoviesDrawer;
