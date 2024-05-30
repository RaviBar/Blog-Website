import { AppBar, Toolbar, Typography, Link as MuiLink, Button } from "@mui/material";
import { Link } from "react-router-dom";

export function MainHeader() {
  return (
    <AppBar position="static" sx={{
      width: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: "#ffffff",
      borderBottom: '1px solid #e0e0e0',
      background: 'linear-gradient(8deg, #fffbfbc2, #e0d4f4f0)'
    }} elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0px 20px' }}>
        <div style={{ display: 'flex', gap: '60px', marginLeft: '50px' }}>
          <MuiLink component={Link} to="/" sx={{
            textDecoration: 'none',
            color: '#4a4a4a',
            fontSize: '1rem',
            transition: 'all 0.1s ease',
            '&:hover': {
              color: 'black',
              transform: 'scale(1.1)',
              fontWeight: 'bold'
            }
          }}>
            <Typography variant="h6" sx={{ fontSize: 'inherit' }}>Home</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/" sx={{
            textDecoration: 'none',
            color: '#4a4a4a',
            fontSize: '1rem',
            transition: 'all 0.1s ease',
            '&:hover': {
              color: 'black',
              transform: 'scale(1.1)',
              fontWeight: 'bold'
            }
          }}>
            <Typography variant="h6" sx={{ fontSize: 'inherit' }}>Contact</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/" sx={{
            textDecoration: 'none',
            color: '#4a4a4a',
            fontSize: '1rem',
            transition: 'all 0.1s ease',
            '&:hover': {
              color: 'black',
              transform: 'scale(1.1)',
              fontWeight: 'bold'
            }
          }}>
            <Typography variant="h6" sx={{ fontSize: 'inherit' }}>About</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/" sx={{
            textDecoration: 'none',
            color: '#4a4a4a',
            fontSize: '1rem',
            transition: 'all 0.1s ease',
            '&:hover': {
              color: 'black',
              transform: 'scale(1.1)',
              fontWeight: 'bold'
            }
          }}>
            <Typography variant="h6" sx={{ fontSize: 'inherit' }}>Help</Typography>
          </MuiLink>
        </div>
        <nav>
          <MuiLink component={Link} to="/login" sx={{
            margin: '0 10px',
            textDecoration: 'none',
            color: '#4a4a4a',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'black',
              textDecoration: 'underline'
            }
          }}>
            <Typography variant="button" sx={{ color: 'inherit' }} >Login</Typography>
          </MuiLink>
          <Button variant="outlined" sx={{
            textDecoration: 'none',
            borderRadius: '20px',
            borderColor: 'green',
            color: 'green',
            margin: '0 10px',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'darkgreen',
              color: 'darkgreen'
            }
          }}>
            Get Started
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
