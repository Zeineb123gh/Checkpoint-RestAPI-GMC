import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        classeName="box"
        style={{ backgroundColor: "rgb(15, 15, 97)" }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">HOME</Link>
          </Typography>
          <div className="NavBtn">
            <Button color="inherit">
              <Link to="/contacts"> Contact List </Link>
            </Button>
            <Button color="inherit">
              <Link to="/addContact"> Add New Contact </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
