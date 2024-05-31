import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";

const comments = [
  { name: "John Doe", text: "Great blog!" },
  { name: "Jane Smith", text: "Very informative, thanks!" },
  { name: "Alice Johnson", text: "Loved the article on web development!" },
  { name: "Bob Brown", text: "Can't wait to read more about blockchain." },
  // Add more comments as needed
];

export default function CommentList() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Comments
      </Typography>
      <List>
        {comments.map((comment, index) => (
          <ListItem key={index} sx={{ borderBottom: "1px solid #e0e0e0" }}>
            <ListItemText
              primary={comment.name}
              secondary={comment.text}
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
