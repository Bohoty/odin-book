import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signIn, signUp } from './authActions'
import { AuthContext } from '../../../contexts/AuthContext'
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
import { Link as RouterLink } from 'react-router-dom';
import Copyright from '../../layout/Copyright'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    Grid: {
        marginTop: '80px',
    }
}));

export default function SignUp() {
    const classes = useStyles();
    const authContext = useContext(AuthContext);
    const token = authContext.state.signedUserToken;
    const err = authContext.state.signUpError;
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };
    const [state, setState] = useState(initialState)
    const handleChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const signUpState = await signUp(state);
        authContext.setState({ ...authContext.state, ...signUpState });
        let newState;
        if (signUpState.signUpError === null) {
            newState = await signIn({
                email: state.email,
                password: state.password,
            });
            authContext.setState({ ...authContext.state, ...newState, rememberMe: false });
        }
        window.location.reload(false);
    };


    const emailErrorMessage = err && authContext.state.signUpError === 'Incorrect email' ? 'Incorrect Email' :
        null;
    if (authContext.state.localStorageHasLoaded) {
        if (token)
            return <Redirect to='/' />;
        return (

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.Grid}
            >

                <Grid item xs={11} md={8} l={6} xl={6}>
                    <Card>
                        <CardContent>
                            <Container component="main" maxWidth="xs">


                                <CssBaseline />
                                <div className={classes.paper}>
                                    <Avatar className={classes.avatar}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign up
              </Typography>
                                    <form className={classes.form} onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    autoComplete="fname"
                                                    name="firstName"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="firstName"
                                                    label="First Name"
                                                    autoFocus
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="lastName"
                                                    label="Last Name"
                                                    name="lastName"
                                                    autoComplete="lname"
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
                                                    autoComplete="email"
                                                    onChange={handleChange}
                                                    error={emailErrorMessage !== null}
                                                    helperText={emailErrorMessage}
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
                                                    autoComplete="current-password"
                                                    onChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                    label="I Love JoJo and Wamu Is The Best Pillar Man."
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
                                                <Link component={RouterLink} to='/SignIn' color='secondary.dark' variant="body2">
                                                    Already have an account? Sign in
                              </Link>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </Container>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
    else return null;
}

