import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Home.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const toggleMenu = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <div className={classes.root}>
            <div class="topnav" id="myTopnav">
                <AppBar position="static" class="topnav">
                    <a class="navbar-brand" href="http://texasforestservice.tamu.edu/" target="_blank">
                        <img id="brand-image" src="http://texasforestinfo.tamu.edu/root/images/logo.png" alt="TFS" />
                    </a>

                    <div class="secondary">
                    <IconButton edge="end" onClick={toggleMenu}
                        class="menuIcon" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                        <h1 id="page-title">Texas Forest Information Portal</h1>
                        
                        <a>Home</a>
                        <a>Contact</a>
                        <a>Sign Up</a>
                    </div>


                   

                </AppBar>
            </div>
            <div class="contentBody">
               Texas Forest Info Homepage
            </div>
        </div>
    );
}