import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import styles from "./DrawerHocStyle"

export default function DrawerHoc({anchor, menuOpen,closeMenu,children }) {
  const classes = styles()
    return (
        <div>
            <Drawer
                anchor={anchor}
                open={menuOpen}
                onClose={closeMenu}
                classes={{ paper: classes.bg , root: classes.bg}}
            >
              {children}
            </Drawer>
        </div>
    );
}
