import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    setName("");
    setComment("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
  );
}
