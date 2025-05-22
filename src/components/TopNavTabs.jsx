// components/TopNavTabs.jsx
import React from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const tabData = [
  { orange: '11GS', blue: 'STRATEGY' },
  { orange: '11GS', blue: 'PROCURE' },
  { orange: '11GS', blue: 'SUPPLY' },
  { orange: '11GS', blue: 'FREIGHT' },
  { orange: '11GS', blue: 'MANAGED SERVICES' }
];

const TopNavTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        boxShadow: 'none',
        borderBottom: 1,
        borderColor: 'divider',
        backgroundColor: 'transparent'
      }}
    >
      <Toolbar>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              label={
                <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <span style={{ color: '#F15A29', fontWeight: 'bold' }}>{tab.orange} </span>
                  <span style={{ color: '#2B3E71', fontWeight: 'bold' }}>{tab.blue}</span>
                  <ArrowDropDownIcon sx={{ color: '#2B3E71', fontSize: '20px' }} />
                </span>
              }
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavTabs;
