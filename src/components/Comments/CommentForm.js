import { Box, TextField, Button, Typography, Rating } from "@mui/material";
import { useState } from "react";

export default function CommentForm({ addComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment({ name, text: comment, rating, dp: "https://via.placeholder.com/40" });
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 4 }}>
      <Typography variant="h6">Leave a Comment</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ width: '200px' , height: '50px'}} 
      />
      <TextField
        label="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        multiline
        rows={4}
        required
        sx={{ width: '400px' }} 
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography component="legend">Rating: </Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(e, newValue) => setRating(newValue)}
          sx={{ marginLeft: 2 }}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary" sx={{ width: '100px' }}>Submit</Button>
    </Box>
  );
}
