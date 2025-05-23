import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { blue } from '@mui/material/colors';

const TopHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2d55a0',
        height:'56px',
        width: 'full', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // space between left and right groups
        px: 2,
        color: '#fff',
      }}
    >
      {/* Left group: Search, Phone, Language+Dropdown */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton sx={{ color: 'white' }} size="small">
          <SearchIcon fontSize="small" />
        </IconButton>

        <IconButton sx={{ color: 'white' }} size="small">
          <PhoneIcon fontSize="small" />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ color: 'white' }} size="small">
            <LanguageIcon fontSize="small" />
          </IconButton>
          <ArrowDropDownIcon fontSize="small" />
        </Box>
      </Box>

      {/* Right group: ContactMail, ChatBubble */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, 'color': blue}}>
        <IconButton sx={{ color: 'white' }} size="small">
          <ContactMailIcon fontSize="small" />
        </IconButton>

        <IconButton sx={{ color: 'white' }} size="small">
          <ChatBubbleOutlineIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopHeader;
