import { Outlet } from "react-router-dom";
import { MainHeader } from "./components/Header/MainHeader";
import { SecondaryHeader } from "./components/Header/SecondaryHeader";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  return (
    <Box>
      <MainHeader />
      <SecondaryHeader />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
