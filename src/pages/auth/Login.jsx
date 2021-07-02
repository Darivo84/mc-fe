import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleButton from 'react-google-button';
import Axios from 'axios';

// Component
import Copyright from '../../components/copyright/Copyright';

// Image
import logo from '../../images/logo.svg';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  // Fetch
  const fetchAuthUser = async () => {
    const response = await Axios.get('http://localhost:5000/api/v1/auth/user', { withCredentials: true }).catch((err) => {
      console.log('Not properly authenticated');
      // dispatch(setIsAuthenticated(false));
      // dispatch(setAuthUser(null));
      // history.push('/login/error');
    });

    if (response && response.data) {
      console.log('User: ', response.data);
      // dispatch(setIsAuthenticated(true));
      // dispatch(setAuthUser(response.data));
      // history.push('/welcome');
    }
  }

  // Login/Register with Google
  const redirectToGoogleSSO = async () => {
    // let timer: NodeJS.Timeout | null = null;
    // let timer = new Timeout(null);
    const googleLoginUrl = 'http://localhost:5000/api/v1/login/google';
    const newWindow = window.open(googleLoginUrl, '_blank', "width=500,height=600")

    // if (newWindow) {
    //   timer = setInterval(() => {
    //     if (newWindow.closed) {
    //       console.log('Yay!!! We are authenticated!');
    //       fetchAuthUser();
    //       if (timer) clearInterval(timer);
    //     }
    //   }, 500);
    // }
  }


  return (
    <div style={{ width: '100vw', height: '85vh', background: 'linear-gradient(45deg, #733BC3 30%, #C64156 90%)', marginTop: 0 }}>
    <Container component="main" maxWidth="xs" style={{ height: '85vh'}}>
      <CssBaseline />
      <div className={classes.paper} style={{ background: 'rgba(255,255,255, 0.4)', padding: '25px', borderRadius: '15px' }}>
      <Link to="/" variant="body2">
        <img src={logo} alt="Logo" style={{height: '100px', paddingTop: '10px'}}/>
      </Link>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h6" style={{color: '#fff'}}>
          Welcome to MISSO | Please Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            
          />
          <Button
            // onClick={() => handleLogin(email, password)}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Login
          </Button>

          <GoogleButton onClick={redirectToGoogleSSO} style={{ width: 'inherit' }} />
          <br />
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2" style={{ color: '#fff', textDecoration: 'none'}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2" style={{ color: '#fff', textDecoration: 'none'}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    <Copyright />
    </div>
  )
}

export default Login