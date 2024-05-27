import { AppBar, Toolbar, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

export function MainHeader() {
  return (
    <AppBar position="sticky" sx={{ width: '100%', margin: 0, padding: 0 }} >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <MuiLink component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h5">Blog</Typography>
        </MuiLink>
        <nav>
          <MuiLink component={Link} to="/login" sx={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="button">Login</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/" sx={{ margin: '0 10px', textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="button">Get Started</Typography>
          </MuiLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

