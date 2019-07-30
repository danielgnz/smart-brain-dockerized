import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'

import { connect } from 'react-redux'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { signUpStart } from '../../redux/user/user.actions'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = ({ signUpStart }) => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { userName, email, password, confirmPassword } = credentials
    
    if(password !== confirmPassword) {
      alert(`Passwords don't match. Please try again!`)
    }
    else {
      signUpStart(userName, email, password)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" component={RouterLink} to='/login'>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userName, email, password) => dispatch(signUpStart({ userName, email, password }))
})
 
export default connect(null, mapDispatchToProps)(SignUp)