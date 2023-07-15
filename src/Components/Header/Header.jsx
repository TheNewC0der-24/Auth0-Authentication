import React, { useState } from 'react';

// react-router-dom
import { useLocation, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

// Material Components
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button,
} from '@mui/material';

// Material Icon
import MenuIcon from '@mui/icons-material/Menu';

// Material Styles
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mobileLinkActive: {
        backgroundColor: '#f4f4f4',
        borderRight: '5px solid #015fc9',
        color: '#015fc9'
    },

    link: {
        color: "#000",
        cursor: "pointer"
    },

    linkActive: {
        borderBottom: '3px solid #015fc9',
        color: '#015fc9',
        cursor: "pointer"
    }
})

const drawerWidth = 240;
const navItems = [
    {
        label: "Home",
        link: "/home"
    },
    {
        label: "About Us",
        link: "/about"
    },
    {
        label: "Contact Us",
        link: "/contact"
    }
];

function Header(props) {

    const location = useLocation();
    const navigate = useNavigate();

    const classes = useStyles();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleDrawerClose = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center' }}
        >
            <Typography variant="h6" sx={{ my: 2 }}>
                Navbar
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        className={
                            location.pathname === item.link ? classes.mobileLinkActive : null
                        }
                        onClick={() => {
                            navigate(item.link);
                            handleDrawerToggle(item.link);
                            handleDrawerClose(false);
                        }}
                    >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Box mt={2}>
                <Button
                    color="primary"
                    variant='contained'
                // onClick={() => navigate("/login")}
                >
                    Login
                </Button>
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "#eeeeee" }}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ me: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon sx={{ color: "#000" }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: "#000" }}
                    >
                        Navbar
                    </Typography>
                    <Box
                        sx={{ display: { xs: 'none', sm: 'flex' }, gap: "1rem" }}
                    >
                        {navItems.map((item, index) => (
                            <Typography
                                key={index}
                                className={
                                    location.pathname === item.link ? classes.linkActive : classes.link
                                }
                                onClick={() => navigate(item.link)}
                            >
                                {item.label}
                            </Typography>
                        ))}
                    </Box>

                    <Box mx={2}>
                        <Button
                            color="primary"
                            variant='contained'
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 1 }}>
                <Toolbar />
            </Box>
        </Box >
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;