import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { GlobalStyle, GridLayout, NavArea, FooterArea } from "./style";

import Logo from "./components/templates/logo/Logo";
import Sidebar from "./components/templates/sidebar/Sidebar";
import Content from "./components/templates/content/Content";
import Footer from "./components/templates/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <GridLayout>
        <Logo />
        <NavArea>
          <Sidebar />
        </NavArea>
        <Content
          icon="home"
          title="Início"
          subtitle="Primeiro Projeto de React"
        />
        <FooterArea>
          <Footer />
        </FooterArea>
      </GridLayout>
    </>
  );
}

export default App;
