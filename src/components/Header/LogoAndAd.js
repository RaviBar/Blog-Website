import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Ad1 from './ac3755006011.jpeg';
import Ad2 from './ac5053003402.gif';
import Ad3 from './Stake-Main-Promo.jpg';

const ads = [Ad1, Ad2, Ad3];

export function LogoAndAd() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);
    return () => clearInterval(adInterval);
  }, []);

  return (
    <Box className="logo-container" sx={{borderBottom: '2px solid #e0e0e0', background: 'linear-gradient(6deg, #fffbfbc2, #e0d4fff0)'}}>
      <img src="./B.png" alt="Logo" className="logo" />
      <Box className="ad-slot">
        <img src={ads[currentAdIndex]} alt="Advertisement" className="ad-banner" />
      </Box>
    </Box>
  );
}
