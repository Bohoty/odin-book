import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import { Hidden } from '@material-ui/core';
import { AuthContext } from '../../contexts/AuthContext'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: '-1',
    },
    drawerPaper: {
        backgroundColor: '#f1f1f1',
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    ToolBar: {
        height: '47px',
    }
}));

const DesktopDrawer = () => {
    const authContext = useContext(AuthContext);
    const token = authContext.state.signedUserToken;
    const classes = useStyles();
    if (authContext.state.localStorageHasLoaded && token) {

        return (
            <Hidden smDown>
                <div className={classes.root}>
                    <CssBaseline />
                    <Drawer
                        anchor='right'
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar className={classes.Toolbar} />
                        <div className={classes.drawerContainer}>
                            <Button className={classes.zobrIndex}>Zeby manga</Button>
                            <Button>Zeby manga</Button>
                            <Button>Zeby manga</Button>
                            <Button>Zeby manga</Button>
                            <Button>Zeby manga</Button>
                        </div>
                    </Drawer>

                </div>
            </Hidden>
        );
    }
    return <></>
}

export default DesktopDrawer;