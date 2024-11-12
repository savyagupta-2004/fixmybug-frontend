import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppAppBar from "./AppAppBar";
import MainContent from "./MainContent";
import Latest from "./Latest";
// import Footer from './components/Footer';
import AppTheme from "./AppTheme";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

export default function Blog(props) {
  return (
    <>
      <Navbar></Navbar>
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        {/* <AppAppBar /> */}
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
          <MainContent />
          <Latest />
        </Container>
      </AppTheme>
      <Footer></Footer>
    </>
  );
}
