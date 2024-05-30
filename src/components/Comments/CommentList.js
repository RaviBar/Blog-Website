import { useState } from "react";
import { Box, Card, CardContent, Avatar, Typography, Rating, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const comments = [
  { name: "John Doe", text: "Great blog! The content was very insightful and I learned a lot. Looking forward to more posts.", rating: 4, dp: "https://via.placeholder.com/40" },
  { name: "Jane Smith", text: "Very informative, thanks! The details were well-explained.", rating: 5, dp: "https://via.placeholder.com/40" },
  { name: "Alice Johnson", text: "Loved the article on web development! It was very comprehensive.", rating: 4, dp: "https://via.placeholder.com/40" },
  { name: "Bob Brown", text: "Can't wait to read more about blockchain. Your posts are always so enlightening.", rating: 5, dp: "https://via.placeholder.com/40" },
  // Add more comments as needed
];

export default function CommentList() {
  const [startIndex, setStartIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const handleNext = () => {
    setOffset(-100);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % comments.length);
      setOffset(0);
    }, 300);
  };

  const handlePrevious = () => {
    setOffset(100);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
      setOffset(0);
    }, 300);
  };

  const visibleComments = [...comments, ...comments].slice(startIndex, startIndex + 3);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", overflowX: "hidden", paddingTop: "24px"}}>
        <IconButton onClick={handlePrevious} sx={{ marginRight: "8px" }}>
          <KeyboardArrowLeft />
        </IconButton>
        <Box sx={{
          display: "flex",
          transition: "transform 0.3s",
          transform: `translateX(${offset}%)`,
          gap: 2,
        }}>
          {visibleComments.map((comment, index) => (
            <Card key={index} sx={{ minWidth: 300, maxWidth: 300, height: 200, padding: 2 }}>
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                  <Avatar src={comment.dp} alt={comment.name} sx={{ marginRight: 2 }} />
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>{comment.name}</Typography>
                </Box>
                <Rating value={comment.rating} readOnly size="small" sx={{ marginBottom: 1 }} />
                <Typography variant="body2">{comment.text}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <IconButton onClick={handleNext} sx={{ marginLeft: "8px" }}>
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}
