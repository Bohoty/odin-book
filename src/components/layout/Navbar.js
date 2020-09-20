import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles'
import { Hidden, SvgIcon } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DesktopDrawer from './DesktopDrawer';
// import Link from '@material-ui/core/Link'
import { Link } from 'react-router-dom';
import Home from '../Home'
const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    position: "relative",
    left: '35px',
    bottom: '5px',
    fontWeight: 'bold',
  },
  StrictHeight: {

    maxHeight: '50px',
    overflow: 'Hidden',
  },
  AppBar: {
    height: '48px',
    // [theme.breakpoints.up('md')]: {
    //   height: '60px',
    // },
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  ToolBar: {
    id: 'zeby',
  },
  IconBox: {
    position: 'absolute',
    top: '0px',
    left: '0.5%',
    [theme.breakpoints.up('md')]: {
      left: '10px',
    },
    width: 50,
    height: 50,
  },
  logo: {

  },
  iconList: {
    position: 'absolute',
    right: '1%'
  },
  icon1: {
  },
  icon2: {
    position: 'absolute',
    right: '140%',
  },
  icon3: {
    position: 'absolute',
    right: '280%',
  },
  icon4: {
    position: 'absolute',
    right: '420%',
  },
  icon5: {
    position: 'absolute',
    right: '560%',
  },
  Link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
}));


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar() {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const links = authContext.state.signedUserToken ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div className={classes.grow}>
      <React.Fragment>
        <CssBaseline />
        <div className={classes.StrictHeight}>

          <ElevationScroll>

            <AppBar className={classes.AppBar} position="static">
              <Toolbar className={classes.ToolBar}>
                <Link to='/' className={classes.Link}>
                  <SvgIcon className={classes.IconBox} fontSize="large" viewBox="0 0 100 100">
                    <path d="M69.7816389,28.0202222 C76.4660833,39.598 75.1033056,53.6485556 67.4433056,63.6574444 C63.7221944,63.3507778 60.2921944,62.0027222 57.4455278,59.9055 C64.4866389,53.0027222 66.2735833,41.9446667 61.1210833,33.0202222 C60.2644167,31.5357778 59.2558056,30.1935556 58.1333056,28.9905 C58.1291389,28.9824444 58.1246944,28.9743889 58.1199722,28.9660556 L58.1074722,28.9627222 C56.7983056,27.5638333 55.3274722,26.3638333 53.7444167,25.3691111 C55.7110833,22.5568889 58.2669167,20.1707778 61.23775,18.3846667 C64.6135833,20.9107778 67.5435833,24.1438333 69.7816389,28.0202222 Z M43.9515556,67.9148333 C46.4185,70.514 49.2840556,72.7306667 52.4482222,74.469 C38.1871111,79.4048333 21.931,73.7056667 14.111,60.1615 C13.2587778,58.6853889 12.5387778,57.1684444 11.9443333,55.6256667 C18.5540556,67.074 32.0987778,71.9670556 43.9515556,67.9148333 Z M34.3150556,61.1518611 C33.7578333,62.98575 33.4539444,64.8596389 33.3845,66.72825 C29.9200556,66.4265833 26.5872778,65.3818611 23.5908889,63.7121389 C24.0925556,59.5315833 25.4267222,55.3840833 27.662,51.51325 C34.3492222,39.9299167 47.2072778,34.0846389 59.7111667,35.7218611 C61.2714444,39.02325 61.8725556,42.6485278 61.4614444,46.2590833 C51.9583889,43.6024167 41.4781111,47.5829722 36.322,56.51325 C35.4653333,57.9976944 34.8067222,59.5418611 34.3258889,61.1154722 C34.3208889,61.12325 34.3161667,61.1313056 34.3117222,61.1393611 L34.3150556,61.1518611 Z M76.58175,43.3239167 C87.9648056,53.20975 91.1456389,70.1214167 83.3320278,83.6541944 C82.4795278,85.1305833 81.5264722,86.5125278 80.4870278,87.7989167 C87.0939722,76.3561389 84.5645278,62.1875278 75.1398056,53.9469722 C75.2275833,53.6505833 75.3123056,53.3528056 75.3925833,53.0525278 C76.2550833,49.8330833 76.6461944,46.5636389 76.58175,43.3239167 Z M47.433,33.9194722 C43.918,34.7669722 40.5693889,36.1541944 37.5063333,38.0141944 C40.3535556,23.1844722 53.4224444,11.9444722 69.0699444,11.9444722 C70.7743889,11.9444722 72.4477222,12.0791944 74.0813333,12.3358611 C60.8585556,12.3358611 49.8466111,21.6239167 47.433,33.9194722 Z M79.3676667,63.67275 C80.8196111,66.7816389 81.6076667,70.1874722 81.6690556,73.6530278 C77.7982222,75.3088611 73.5393333,76.2269167 69.0698889,76.2269167 C55.6973889,76.2269167 44.2082222,68.01775 39.3726667,56.3746944 C41.4601667,53.3774722 44.3351667,51.0513611 47.626,49.6094167 C50.086,59.1541389 58.7676667,66.2269167 69.0698889,66.2269167 C70.7837778,66.2269167 72.4504444,66.0246944 74.0535,65.6544167 C74.0626667,65.6544167 74.0721111,65.6546944 74.0812778,65.6546944 L74.0904444,65.6460833 C75.9501667,65.21275 77.7193333,64.5424722 79.3676667,63.67275 Z" />
                  </SvgIcon>
                  <Hidden smDown>
                    <Typography className={classes.title} variant="h5">Odinbook</Typography>
                  </Hidden>
                </Link>
                <Hidden mdUp>
                  <div className={classes.iconList}>
                    <SearchIcon className={classes.icon5} fontSize='' />
                    <NotificationsIcon className={classes.icon4} fontSize='' />
                    <EmailIcon className={classes.icon3} fontSize='' />
                    <PeopleAltIcon className={classes.icon2} fontSize='' />
                    <MoreVertIcon className={classes.icon1} fontSize='' />
                  </div>
                </Hidden>
                <Hidden smDown>
                  <div className={classes.iconList}>
                    <SearchIcon className={classes.icon4} fontSize='' />
                    <NotificationsIcon className={classes.icon3} fontSize='' />
                    <EmailIcon className={classes.icon2} fontSize='' />
                    <PeopleAltIcon className={classes.icon1} fontSize='' />
                  </div>
                </Hidden>
              </Toolbar>
              <DesktopDrawer />
            </AppBar>
          </ElevationScroll>
        </div>
      </React.Fragment>
    </div >

  );
}
