import React from "react";

import {
  GlobalStyle,
  GridLayout,
  LogoArea,
  NavArea,
  FooterArea
} from "./style";

import Logo from "./components/templates/logo/Logo";
import Sidebar from "./components/templates/sidebar/Sidebar";
import Content from "./components/templates/content/Content";
import Footer from "./components/templates/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <GridLayout>
        <LogoArea>
          <Logo></Logo>
        </LogoArea>
        <NavArea>
          <Sidebar></Sidebar>
        </NavArea>
        <Content></Content>
        <FooterArea>
          <Footer></Footer>
        </FooterArea>
      </GridLayout>
    </>
  );
}

export default App;
