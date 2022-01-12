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
import DrawerHoc from "../../hoc/DrawerHoc";
import NavTop from "./NavTop/NavTop";
import Logo from "./Logo/Logo";
import Badge from "@mui/material/Badge";
import {useSelector} from "react-redux";
import localState from "../SideBar/localState";
import MobileMenu from "./MobileMenu/MobileMenu";
import Cart from "../Cart/Cart";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isCartOpen, setCartOpen] = useState(false)
    const openMenuHandler = () => setMenuOpen(true)
    const openCartHandler = () => setCartOpen(true)
    const activeStep = useSelector((state) => state.product.activeStep)

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
                  <DrawerHoc
                    menuOpen={isCartOpen}
                    closeMenu={() => setCartOpen(false)}
                    anchor="right"
                    style={{
                      background: 'transparent'
                    }}
                  >
                    <Cart />
                  </DrawerHoc>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mx: 2}}
                        onClick={openCartHandler}
                    >
                      <Badge badgeContent={activeStep} variant="dot" color="secondary">
                        <ShoppingBagOutlined />
                      </Badge>
                    </IconButton>


                    <Button variant="outlined" color="inherit" sx={{mx: 2, fontWeight: 'light'}}>Login</Button>
                    {
                        isMobile &&
                            <>
                                <DrawerHoc
                                    menuOpen={isMenuOpen}
                                    closeMenu={() => setMenuOpen(false)}
                                    anchor="left"
                                >
                                  <MobileMenu />
                                </DrawerHoc>
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
