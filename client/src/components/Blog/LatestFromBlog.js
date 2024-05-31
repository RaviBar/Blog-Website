import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { useState } from "react";
import Post from "./Post";

const posts = [<Post/>, <Post/>,<Post/>];

export default function LatestFromBlog() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % posts.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 3 + posts.length) % posts.length);
  };

  const visiblePosts = posts.slice(startIndex, startIndex + 3);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {visiblePosts.map((post, index) => (
          <Card key={index} sx={{ width: "30%" }}>
            <CardContent>
              <Post post={post} />
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
}
