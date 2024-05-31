import { AppBar, Toolbar, Menu, MenuItem, Button } from '@mui/material';
import { useState } from 'react';

export function SecondaryHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(null);

  const handleClick = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setMenu(menuName);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenu(null);
  };

  return (
    <AppBar position="static" color="default"  sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Toolbar  sx={{ justifyContent: 'center' }}>
        <Button onClick={(e) => handleClick(e, 'blogs')}>Blogs</Button>
        <Button onClick={(e) => handleClick(e, 'newsletter')}>Newsletter</Button>
        <Button onClick={(e) => handleClick(e, 'templates')}>Templates</Button>
        <Button onClick={(e) => handleClick(e, 'resources')}>Resources</Button>
      </Toolbar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menu === 'blogs' && (
          <>
            <MenuItem onClick={handleClose}>Marketing</MenuItem>
            <MenuItem onClick={handleClose}>App Development</MenuItem>
            <MenuItem onClick={handleClose}>Web Development</MenuItem>
            <MenuItem onClick={handleClose}>Crypto</MenuItem>
            <MenuItem onClick={handleClose}>Blockchain</MenuItem>
            <MenuItem onClick={handleClose}>NFT</MenuItem>
            <MenuItem onClick={handleClose}>Sales</MenuItem>
          </>
        )}
        {menu === 'newsletter' && (
          <>
            <MenuItem onClick={handleClose}>Newsletter 1</MenuItem>
            <MenuItem onClick={handleClose}>Newsletter 2</MenuItem>
          </>
        )}
        {menu === 'templates' && (
          <>
            <MenuItem onClick={handleClose}>Template 1</MenuItem>
            <MenuItem onClick={handleClose}>Template 2</MenuItem>
          </>
        )}
        {menu === 'resources' && (
          <>
            <MenuItem onClick={handleClose}>Resource 1</MenuItem>
            <MenuItem onClick={handleClose}>Resource 2</MenuItem>
          </>
        )}
      </Menu>
    </AppBar>
  );
}
