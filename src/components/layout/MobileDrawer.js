import React, { useEffect } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'


export default function MobileDrawer(props) {
    console.log(props);
    const { open, setOpen, items } = props;
    return (
        <SwipeableDrawer
            swipeAreaWidth={10}
            anchor={'right'}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            {items}
        </SwipeableDrawer>

    )
}
