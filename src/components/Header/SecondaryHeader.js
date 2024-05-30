import React, { useState } from 'react';
import { AppBar, Toolbar, Popover, MenuItem, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function SecondaryHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(null);

  const handleMouseEnter = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setMenu(menuName);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setMenu(null);
  };

  const menus = {
    blogs: ['Marketing', 'App Development', 'Web Development', 'Crypto', 'Blockchain', 'NFT', 'Sales'],
    newsletter: ['Newsletter 1', 'Newsletter 2'],
    templates: ['Template 1', 'Template 2'],
    resources: ['Resource 1', 'Resource 2']
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        width: '100%', 
        margin: 0, 
        padding: 0, 
        backgroundColor: "#ffffff",
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(175deg, #fffbfbc2, #e0d4f950)',
        overflowX: 'hidden'
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', gap: '40px' }}>
        {Object.keys(menus).map((menuKey, index) => (
          <div
            key={index}
            onMouseEnter={(e) => handleMouseEnter(e, menuKey)}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <Button
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transition: 'transform 0.3s ease',
                    transform: menu === menuKey ? 'rotate(0deg)' : 'rotate(180deg)',
                  }}
                />
              }
              sx={{
                textTransform: 'none',
                color: '#4a4a4a',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
            >
              {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
            </Button>
            <Popover
              open={Boolean(anchorEl) && menu === menuKey}
              anchorEl={anchorEl}
              onClose={handleMouseLeave}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              disableRestoreFocus
              onMouseLeave={handleMouseLeave}
            >
              {menus[menuKey].map((item, idx) => (
                <MenuItem key={idx}>{item}</MenuItem>
              ))}
            </Popover>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
}
