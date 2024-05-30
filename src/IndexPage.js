import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Box,
} from "@mui/material";
import LatestFromBlog from "./components/Blog/LatestFromBlog";
import CommentList from "./components/Comments/CommentList";
import CommentForm from "./components/Comments/CommentForm";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function IndexPage() {
  const [comments, setComments] = useState([
    { name: "John Doe", text: "Great blog! The content was very insightful and I learned a lot. Looking forward to more posts.", rating: 4, dp: "https://via.placeholder.com/40" },
    { name: "Jane Smith", text: "Very informative, thanks! The details were well-explained.", rating: 5, dp: "https://via.placeholder.com/40" },
    { name: "Alice Johnson", text: "Loved the article on web development! It was very comprehensive.", rating: 4, dp: "https://via.placeholder.com/40" },
    { name: "Bob Brown", text: "Can't wait to read more about blockchain. Your posts are always so enlightening.", rating: 5, dp: "https://via.placeholder.com/40" },
  ]);

  const addComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://tse1.mm.bing.net/th?id=OIP.KIbfML20ergg62u-sAkkYgHaE8&pid=Api&P=0&h=180",
    "https://pestleanalysis.com/wp-content/uploads/2015/03/business-impact-analysis-template.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.r6XCmfRPTdDXn2dxeTR0KgHaEK&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.kp1geSgW2l6TsZlHvgZ-YgHaHP&pid=Api&P=0&h=180",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container
      sx={{
        mt: 0,
        background: "linear-gradient(140deg, #f8f9fa, #e0e0e0)",
        padding: "60px",
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={8} sx={{ ml: { xs: 4, md: 3 } }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "#9e9e9e",
              fontSize: "1rem",
              "&:hover": {
                textDecoration: "underline",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Websites &gt; Blogging
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ fontSize: "1.18rem", color: "gray" }}
          >
            Explore fresh perspectives and inspiring content at BlogHub, where
            passionate writers share insights on the latest trends and topics.
            Join our vibrant community to stay informed, inspired, and
            connected.
            <br /> Click on get started below !!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
              },
            }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              height: "280px",
              width: "340px",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <IconButton
              onClick={goToPrevSlide}
              sx={{
                position: "absolute",
                top: "50%",
                left: "8px",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              <KeyboardArrowLeft />
            </IconButton>
            <img
              src={images[currentImageIndex]}
              alt="Placeholder"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <IconButton
              onClick={goToNextSlide}
              sx={{
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              <KeyboardArrowRight />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
         Popular Blogs
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
