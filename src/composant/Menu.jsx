import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const useStyles = makeStyles((theme) => ({
  navlinks: { marginLeft: theme.spacing(10), display: "flex" },
  logo: { flexGrow: "1", cursor: "pointer" },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "17px",
    marginLeft: theme.spacing(2),
    "&:hover": { color: "black", borderBottom: "1px solid black" }
  }
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();


  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
      <SportsEsportsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, fontSize: '38px'}} />
        <Typography variant="h6" className={classes.logo}>
          Navbar
        </Typography>
       
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}  >
            Home
            </Link>
            <Link to="/contact" className={classes.link}>
             Contact
            </Link>
            <Link to="/login" className={classes.link}>
              suivis livraison
            </Link>
            <br/>
          </div>

         <IconButton aria-label="edit" href={`/panier`} sx={{fontSize: '38px', marginLeft: "70%",            
         color:'white'}}>
            <LocalMallIcon sx={{   fontSize: '25px'}} />
            </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
