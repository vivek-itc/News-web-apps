import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from "./../../constants/index";
// import Logo from './../../Images/logo.'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Result', 'Latest job', 'सरकारी योजना', 'Admit Card', 'ANSWER KEY', "Syllabus", 'About US', 'Services', 'Contact US'];
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#80add9',
    },
  },
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "color": '#ffffff'
  }
});

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (events) => {
    if (events == "Home") {
      navigate(ROUTE.HOME.path)
    } else if (events == "About US") {
      navigate(ROUTE.ABOUTUS.path)
    } else if (events == "Services") {
      navigate(ROUTE.SERVICE.path)
    } else if (events == "Contact US") {
      navigate(ROUTE.CONTACT.path)
    } else if (events == "Result") {
      navigate(ROUTE.RESULTS.path)
    }

  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} theme={darkTheme}>
      <Typography variant="subtitle1" noWrap sx={{ my: 2, fontSize: 16 }}>
        Results duniya
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" theme={darkTheme}>
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
          <img src={require('./../../Images/logo.png')} style={{ width: 50, height: 50 }} />
          <Typography variant="subtitle1" noWrap component="div" sx={{ flexGrow: 1, display: { sm: 'block' }, color: '#fff', fontSize: 18, paddingLeft: 1 }}>
            Results Duniya
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button style={{ textTransform: 'none' }} key={item} sx={{ color: '#ffffff', fontSize: 14 }} onClick={() => handleClick(item)}>
                {item}
              </Button>
            ))}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
