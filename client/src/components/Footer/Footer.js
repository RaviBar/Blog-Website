import { Box, Typography, Link as MuiLink } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 4, py: 2, textAlign: "center", backgroundColor: "#f1f1f1" }}>
      <Typography variant="body2">Follow us on social media</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
        <MuiLink href="https://facebook.com" target="_blank">Facebook</MuiLink>
        <MuiLink href="https://twitter.com" target="_blank">Twitter</MuiLink>
        <MuiLink href="https://instagram.com" target="_blank">Instagram</MuiLink>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>© 2024 Blog. All rights reserved.</Typography>
    </Box>
  );
}
