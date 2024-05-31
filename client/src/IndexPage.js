import { Container, Box, Typography, Button, Grid } from "@mui/material";
import LatestFromBlog from "./components/Blog/LatestFromBlog";
import CommentList from "./components/Comments/CommentList";
import CommentForm from "./components/Comments/CommentForm";

export default function IndexPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Websites &gt; Blogging
          </Typography>
          <Typography variant="body1" paragraph>
            Here you can add 4-5 lines of text content describing your website or the section.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP._8Wn1GKFG04_peR5O749uwHaDo&pid=Api&P=0&h=180"
            alt="Placeholder"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Latest from Blog
        </Typography>
        <LatestFromBlog />
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Comments
        </Typography>
        <CommentList />
        <CommentForm />
      </Box>
    </Container>
  );
}
