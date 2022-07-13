import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import StickyHeadTable from "./StickyHeadTable";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Nav } from "react-bootstrap";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FileUpload from "./FileUpload";
import DataTable from "./DataTables";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [selected, setSelected] = React.useState(false);

  const buttonProps = (value) => ({
    selected: selectedIndex === value,
    onClick: () => {
      setSelected(true);
      setSelectedIndex(value);
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Nav id="navBar" navbar>
            <NavLink to="home" id="home" className="text-link">
              <ListItem key="Home" disablePadding>
                <ListItemButton
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                    ":hover": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                  }}
                  selected={selected}
                  {...buttonProps(0)}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="fileUpload" id="fileUpload" className="text-link">
              <ListItem key="FileUpload" disablePadding>
                <ListItemButton
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                    ":hover": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                  }}
                  selected={selected}
                  {...buttonProps(1)}
                >
                  <ListItemIcon>
                    <UploadFileIcon />
                  </ListItemIcon>
                  <ListItemText primary="FileUpload" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="staticTable" id="staticTable" className="text-link">
              <ListItem key="Static Table" disablePadding>
                <ListItemButton
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                    ":hover": {
                      backgroundColor: "#3f51b5",
                      color: "white",
                    },
                  }}
                  selected={selected}
                  {...buttonProps(2)}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Detectors" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </Nav>
        </List>
        <Divider />
        <List>
          <ListItem key="Work in progress" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Work in progress" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/staticTable" element={<StickyHeadTable />} />
        <Route path="/fileUpload" element={<FileUpload />} />
        <Route path="/dashboard" element={<DataTable />} />
      </Routes>
    </Box>
  );
}
