import { Box, Card, CardContent, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const posts = [
  { id: 1, title: "Road to Blockchain", link: "https://101blockchains.com/create-blockchain-wallet/", image: "https://101blockchains.com/wp-content/uploads/2024/04/Create-Blockchain-Wallet-1078x516.webp" },
  { id: 2, title: "Introduction to crypto club", link: "https://101blockchains.com/top-certified-metaverse-expert-skills/", image: "https://alvarotrigo.com/blog/assets/imgs/2022-04-29/web3-project-website.jpeg" },
  { id: 3, title: "Internet of Blockchains", link: "https://101blockchains.com/blockchain-development-tutorial/", image: "https://alvarotrigo.com/blog/assets/imgs/2022-04-29/example-web3-webpage-cosmos.jpeg" },
  { id: 4, title: "web3 project guide", link: "https://101blockchains.com/web3-project-launch/", image: "https://101blockchains.com/wp-content/uploads/2024/04/Create-Blockchain-Wallet-1078x516.webp" },
  { id: 5, title: "Dsa - from 0 to hero", link: "https://medium.com/theleanprogrammer/dsa-from-0-to-mastery-c298250b0530", image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kmpilWN6AkvkbVTWyLFtMw.png" },
  { id: 6, title: "How to do startups", link: "https://masschallenge.org/articles/startup-blogs/", image: "https://masschallenge.org/wp-content/uploads/2018/11/startup-blogs-follow.jpg" },
];

const createLoopingPosts = (posts, visibleCount) => {
  return [
    ...posts.slice(-visibleCount),
    ...posts,
    ...posts.slice(0, visibleCount),
  ];
};

const visibleCount = 3;
const loopingPosts = createLoopingPosts(posts, visibleCount);

export default function LatestFromBlog() {
  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex === loopingPosts.length - visibleCount) {
          setCurrentIndex(visibleCount);
        } else if (currentIndex === 0) {
          setCurrentIndex(loopingPosts.length - visibleCount * 2);
        }
      }, 500); // Match this duration with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", overflowX: "hidden", paddingTop: "24px  " }}>
        <IconButton onClick={handlePrevious} sx={{ marginRight: "8px" }}>
          <KeyboardArrowLeft />
        </IconButton>
        <Box sx={{ display: "flex", overflow: "hidden", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              transition: isTransitioning ? "transform 0.5s ease" : "none",
              transform: `translateX(-${(currentIndex - visibleCount) * (100 / visibleCount)}%)`,
              width: `${loopingPosts.length * (100 / visibleCount)}%`,
            }}
          >
            {loopingPosts.map((post, index) => (
              <Box
                key={index}
                sx={{
                  flex: `0 0 ${100 / visibleCount}%`,
                  boxSizing: "border-box",
                  padding: "0 4px",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s",
                  },
                }}
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <Card sx={{ height: "280px", width: "80%" }}>
                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                      <Box
                        component="img"
                        src={post.image}
                        alt={post.title}
                        sx={{
                          width: "100%",
                          height: "140px",
                          objectFit: "cover",
                          transition: "transform 0.3s",
                        }}
                      />
                      <h3 style={{ fontSize: "0.9rem", textAlign: "center" }}>{post.title}</h3>
                    </CardContent>
                  </Card>
                </a>
              </Box>
            ))}
          </Box>
        </Box>
        <IconButton onClick={handleNext} sx={{ marginLeft: "8px" }}>
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}
