import { Outlet } from "react-router-dom";
import { MainHeader } from "./components/Header/MainHeader";
import { SecondaryHeader } from "./components/Header/SecondaryHeader";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer";
import { LogoAndAd } from "./components/Header/LogoAndAd";

export default function Layout() {
  return (
    <Box>
      <MainHeader />
      <LogoAndAd/>
      <SecondaryHeader />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
