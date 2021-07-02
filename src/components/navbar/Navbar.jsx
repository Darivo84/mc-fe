import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import './navbar.css'
import logo from '../../images/logo.svg';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar} style={{ background: 'linear-gradient(45deg, #733BC3 30%, #C64156 90%)' }}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <NavLink variant="button" color="textPrimary" to="/" className={classes.link}>
            <img src={logo} alt="Logo" style={{height: '70px', paddingTop: '10px'}}/>
          </NavLink>
          </Typography>
          <nav>
            <NavLink variant="button" color="textPrimary" exact to="/customers" className={classes.link} activeClassName="navMenuLinksActive" style={{color: '#fff', textTransform: 'uppercase'}}>
              Customers
            </NavLink>
            <NavLink variant="button" color="textPrimary" exact to="/business" className={classes.link} activeClassName="navMenuLinksActive" style={{color: '#fff', textTransform: 'uppercase'}}>
              Business
            </NavLink>
            <NavLink variant="button" color="textPrimary" exact to="/developers" className={classes.link} activeClassName="navMenuLinksActive" style={{color: '#fff', textTransform: 'uppercase'}}>
              Developers
            </NavLink>
            <NavLink variant="button" color="textPrimary" exact to="/developers" className={classes.link} activeClassName="navMenuLinksActive" style={{color: '#fff', textTransform: 'uppercase'}}>
              Documentation
            </NavLink>
          </nav>
          <NavLink to="/login" style={{ textDecoration: 'none' }}>
          <Button color="default" variant="outlined" className={classes.link} style={{color: 'linear-gradient(45deg, #733BC3 30%, #C64156 90%)', background: '#fff'}}>
            Dashboard
          </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      </React.Fragment>
  )
}

export default Navbar
