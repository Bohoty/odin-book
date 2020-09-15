import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signIn } from './authActions';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Home from '../../Home';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            Eltabba Limited Company {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
    errMsg: {
        color: '#ea0027',
    }
}));


export default function SignIn(props) {
    const classes = useStyles();

    const authContext = useContext(AuthContext);
    const err = authContext.state.signInError;
    const token = authContext.state.signedUserToken;

    const initialState = {
        email: '',
        password: '',
    };
    const [rememberMe, setRememberMe] = useState(false);
    const [state, setState] = useState(initialState)
    const handleChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
        console.log(props);
        props.setProgressBarStatus(true);
        e.preventDefault();
        const newState = await signIn(state);
        props.setProgressBarStatus(false);
        authContext.setState({ ...authContext.state, ...newState, rememberMe });
    };

    const handleCheckBox = (e) => {
        setRememberMe(e.target.checked);
    }
    const emailErrorMessage = err && authContext.state.signInError === 'Incorrect email' ? 'Incorrect Email' :
        null;
    const passwordErrorMessage = err && authContext.state.signInError === 'Incorrect password' ? 'Incorrect Password' :
        null;
    if (token) return <Redirect to={Home} />;
    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
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
                        onChange={handleChange}
                        error={emailErrorMessage !== null}
                        helperText={emailErrorMessage}
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
                        onChange={handleChange}
                        error={passwordErrorMessage !== null}
                        helperText={passwordErrorMessage}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" onChange={handleCheckBox} />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}