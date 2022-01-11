import React, {useState} from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import {ShoppingBagOutlined} from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerHeader from "./DrawerHeader/DrawerHeader";
import NavTop from "./NavTop/NavTop";
import Logo from "./Logo/Logo";
import Badge from "@mui/material/Badge";
import {useSelector} from "react-redux";
import localState from "../SideBar/localState";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isMenuOpen, setMenuOpen] = useState(false)
    const openMenuHandler = () => setMenuOpen(true)
    const activeStep = useSelector((state) => state.product.activeStep)
    const {screens} = localState
    const screen = useSelector((state) => state.product.screen)
    console.log(screen)
    // const price = screens[screen].price
    // if(activeStep>0) console.log(price)


    return (
        <Box>
            <AppBar position="static">
                <Toolbar
                    edge="center"
                    sx={{
                        fontWeight: 'light',
                        flexGrow: 1
                    }}
                >
                    {
                        !isMobile &&
                            <>
                                <Logo />
                                <NavTop
                                    color="inherit"
                                />
                            </>
                    }
                    {
                        isMobile &&
                        <div style={{display: 'flex', flexGrow: 1, width: '20px'}}>
                            <Logo />
                        </div>
                    }
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mx: 2}}
                    >
                      <Badge badgeContent={0}  max={999} color="secondary">
                        <ShoppingBagOutlined />
                      </Badge>
                    </IconButton>

                    <Button variant="outlined" color="inherit" sx={{mx: 2, fontWeight: 'light'}}>Login</Button>
                    {
                        isMobile &&
                            <>
                                <DrawerHeader
                                    menuOpen={isMenuOpen}
                                    closeMenu={() => setMenuOpen(false)}
                                />
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mx: 2}}
                                    onClick={openMenuHandler}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
