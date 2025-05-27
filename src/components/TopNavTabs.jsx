import React from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const tabData = [
  { orange: '11GS', blue: 'STRATEGY' },
  { orange: '11GS', blue: 'PROCURE' },
  { orange: '11GS', blue: 'SUPPLY' },
  { orange: '11GS', blue: 'FREIGHT' },
  { orange: '11GS', blue: 'MANAGED SERVICES' },
];

const TopNavTabs = () => {
  const [value, setValue] = React.useState(0);
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = (index) => {
    setValue(index);
    setMenuAnchor(null);
  };

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: 1,
        borderColor: 'divider',
        zIndex: 1300,
      }}
    >
      <Toolbar
  sx={{
    justifyContent: { xs: 'center', sm: 'flex-start' }, // Center on mobile, left on larger screens
    px: { xs: 1, sm: 2 },
  }}
>
  {isMobile ? (
    <>
      <Box display="flex" justifyContent="center" width="100%">
        <IconButton
          onClick={handleMenuClick}
          aria-controls="mobile-menu"
          aria-haspopup="true"
        >
          <ArrowDropDownIcon sx={{ fontSize: '32px', color: 'white' }} />
        </IconButton>
      </Box>

      <Menu
        id="mobile-menu"
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {tabData.map((tab, index) => (
          <MenuItem key={index} onClick={() => handleMenuClose(index)}>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography sx={{ color: '#F15A29', fontWeight: 'bold' }}>
                {tab.orange}
              </Typography>
              <Typography sx={{ color: '#2B3E71', fontWeight: 'bold' }}>
                {tab.blue}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  ) : (
    <Tabs
      value={value}
      onChange={handleTabChange}
      textColor="primary"
      indicatorColor="primary"
    >
      {tabData.map((tab, index) => (
        <Tab
          key={index}
          label={
            <Box display="flex" alignItems="center" gap={1}>
              <span style={{ color: '#F15A29', fontWeight: 'bold' }}>{tab.orange}</span>
              <span style={{ color: '#2B3E71', fontWeight: 'bold' }}>{tab.blue}</span>
              <ArrowDropDownIcon sx={{ fontSize: '20px' }} />
            </Box>
          }
        />
      ))}
    </Tabs>
  )}
</Toolbar>

    </AppBar>
  );
};

export default TopNavTabs;
