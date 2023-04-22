import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom'; // Add this import

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
    const window = props.window;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#6d6d6a', // Change this color to your desired color
            },
        },
    });
    const CustomToolbar = styled(Toolbar)({
        minHeight: '400px', // Set this value to your desired height
    });
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Button variant="contained">Contained</Button>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ display: 'flex' }}>
                <CustomToolbar>
                    <CssBaseline />

                    <AppBar component="nav" className="appbar-fixed">

                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                <RouterLink to="/" style={{ textDecoration: 'none' }}>
                                    <Button sx={{ color: '#fff' }}>Home</Button></RouterLink>
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                    <RouterLink to="/dashboard" style={{ textDecoration: 'none' }}>
                                        <Button sx={{ color: '#fff' }}>Dashboard</Button>
                                    </RouterLink>
                                    <Link href="#" color="inherit" underline="none"><Button sx={{color: '#fff'}}>camera</Button></Link>
                                    <Link href="#" color="inherit" underline="none"><Button sx={{color: '#fff'}}>Team Info</Button></Link>

                                </Typography>
                            </Box>
                        </Toolbar>

                    </AppBar>
                </CustomToolbar>
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
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>

            </Box>
        </ThemeProvider>
    );
}

export default DrawerAppBar;

