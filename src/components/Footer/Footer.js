import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #434343, #000000)",
        color: "#fff",
        padding: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>About Us</Typography>
          <Typography variant="body2">
            BlogHub is a platform to share and discover amazing blog content on various topics. Join our community and start blogging today!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Categories</Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Link href="#" color="inherit" underline="none">App Development</Link><br />
              <Link href="#" color="inherit" underline="none">Web Development</Link><br />
              <Link href="#" color="inherit" underline="none">Crypto</Link><br />
              <Link href="#" color="inherit" underline="none">NFT</Link>
            </Grid>
            <Grid item xs={6}>
              <Link href="#" color="inherit" underline="none">Blockchain</Link><br />
              <Link href="#" color="inherit" underline="none">Sales</Link><br />
              <Link href="#" color="inherit" underline="none">Travel</Link><br />
              <Link href="#" color="inherit" underline="none">Food</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <Link href="#" color="inherit" underline="none">Home</Link><br />
          <Link href="#" color="inherit" underline="none">About</Link><br />
          <Link href="#" color="inherit" underline="none">Contact</Link><br />
          <Link href="#" color="inherit" underline="none">Privacy Policy</Link><br />
          <Link href="#" color="inherit" underline="none">Terms of Service</Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box>
            <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" color="inherit">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="body2">&copy; {new Date().getFullYear()} BlogHub. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}
