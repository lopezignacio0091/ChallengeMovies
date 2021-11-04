import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchInput from './SearchInput';
import LogMenu from './LogMenu';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Navbar = () => {

    const [auth, setAuth] = React.useState(true);
    const location = useLocation();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" enableColorOnDark  >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        component={Link} 
                        to="/"
                    >
                        <TheatersIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Challenge Movies
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {location.pathname === '/' && <SearchInput />}
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {auth && (
                            <LogMenu />
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;