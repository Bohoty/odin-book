import React, { useContext } from 'react'
import DesktopDrawer from './DesktopDrawer'
import Hidden from '@material-ui/core/Hidden'
import MobileDrawer from './MobileDrawer';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

export default function Drawer(props) {
    
    const token = props.token;
    let listItems = [
        { name: 'Signout', id: 1, dir: '/Signout' },
        { name: 'Signout', id: 2, dir: '/Signout' },
        { name: 'Signout', id: 3, dir: '/Signout' },
        { name: 'Signout', id: 4, dir: '/Signout' },
    ];
    listItems = listItems.map(item => (
        <Link to={item.dir} key={item.id}>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>
        </Link >)
    );
    listItems = (
        <List>
            {listItems}
        </List>
    )
    if (token) {
        return (
            <>
                <Hidden smDown>
                    <DesktopDrawer items={listItems} />
                </Hidden>
                <Hidden mdUp>
                    <MobileDrawer open={props.open} setOpen={props.setOpen} items={listItems} />
                </Hidden>
            </>
        )
    }
    return <></>;
}
