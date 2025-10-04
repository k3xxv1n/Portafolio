import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
       <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar className="navbar">
                <Link component={RouterLink} to="/" color="inherit" underline="none" sx={{ mr: 2, transition: "all 0.3s ease-in-out", color: '#D1D5DB', '&:hover': {color: '#DC2626', transform: "scale(1.20)"}}} >Home</Link>
                <Link component={RouterLink} to="/About" color="inherit" underline="none" sx={{ mr: 2,transition: "all 0.3s ease-in-out", color: '#D1D5DB', '&:hover': {color: '#DC2626', transform: "scale(1.20)"}, borderBottom: location.pathname == '/About' ? "2px solid black" : "none", pb: 0} }>About me</Link>
                <Link component={RouterLink} to="/Projects" color="inherit" underline="none" sx={{ mr: 2, transition: "all 0.3s ease-in-out", color: '#D1D5DB', '&:hover': {color: '#DC2626', transform: "scale(1.20)"}, borderBottom: location.pathname == '/Projects' ? "2px solid black" : "none", pb: 0}}>Projects</Link>
                <Link component={RouterLink} to="/Contact" color="inherit" underline="none" sx={{transition: "all 0.3s ease-in-out", color: '#D1D5DB', '&:hover': {color: '#DC2626', transform: "scale(1.20)"}, borderBottom: location.pathname == '/Contact' ? "2px solid black" : "none", pb: 0}}>Contact</Link>

            </Toolbar>
        </AppBar>
       </Box>
    )
}

export default Navbar;