/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Paper, Grid, Avatar, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
  post: {
    marginTop: '70px',
    paddingTop: '10px',
    paddingBottom: theme.spacing(0.5),
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: theme.palette.secondary.dark,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  postBody: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  like: {
    transform: 'scale(-1, 1)',
  },
  postActions: {
    marginTop: theme.spacing(1),
  },
  iconsSize: {
    fontSize: theme.spacing(3.8),
  },
  blueColor: {
    color: theme.palette.secondary.dark,
  },
  likesNumber: {
    marginRight: '10px',
  },
  grey: {
    color: 'grey',
  },
}));

export default function Post(props) {
  const authorFirstName = props.authorFirstName;
  const authorLastName = props.authorLastName;
  const createdAt = props.createdAt;
  const content = props.content;
  const [isLiked, setIsLiked] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.post}>
        <Grid container direction='column' spacing={0}>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar className={classes.avatar}>
                {authorFirstName[0] + authorLastName[0]}
              </Avatar>
            </Grid>
            <Grid item xs container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography variant='h6'>
                    {authorFirstName + ' ' + authorLastName}
                  </Typography>
                  <Typography
                    variant='body2'
                    gutterBottom
                    className={classes.grey}
                  >
                    {createdAt}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid Item>
            <Typography className={classes.postBody}>{content}</Typography>
          </Grid>
          <Grid
            Item
            container
            alignItems='flex-start'
            justify='flex-end'
            direction='row'
          >
            <Typography
              variant='body2'
              className={clsx(classes.likesNumber, classes.grey)}
            >
              12 Likes
            </Typography>
            <Typography variant='body2' className={classes.grey}>
              12 Comments
            </Typography>
          </Grid>
          <Grid Item container direction='column'>
            <Grid Item>
              <Divider variant='fullWidth' />
            </Grid>
            <Grid
              Item
              container
              justify='space-around'
              className={classes.postActions}
            >
              <Grid Item>
                <ThumbUpRoundedIcon
                  className={clsx(
                    classes.like,
                    classes.iconsSize,
                    isLiked ? classes.blueColor : null
                  )}
                />
              </Grid>
              <Grid Item>
                <CommentIcon className={classes.iconsSize} />
              </Grid>
              <Grid Item>
                <ShareIcon className={classes.iconsSize} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
