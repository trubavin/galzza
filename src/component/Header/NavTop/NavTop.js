import React from 'react';
import {Link} from "react-router-dom";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

const NavTop = () => {
    const menuTitles = [ "Configurator", "Contact", "About"]
    return (
        <>
            <MenuList sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexGrow: 1 }}
            >
                <MenuItem
                    component={Link}
                    to="/"
                >
                    Home
                </MenuItem>
                {
                    menuTitles.map((menuTitle, index)=> (
                        <MenuItem
                            key={menuTitle}
                            component={Link}
                            to={`/${menuTitle.toLowerCase()}`}
                        >
                            {menuTitle}
                        </MenuItem>
                    ))
                }

            </MenuList>

        </>
    );
};

export default NavTop;
