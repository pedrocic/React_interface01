import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 225px 1fr;
  grid-template-rows: 100px 1fr 40px;
  grid-template-areas:
    "logo header"
    "menu content"
    "menu footer";
  height: 100vh;
`;

export const LogoArea = styled.aside`
  grid-area: logo;
`;

export const NavArea = styled.aside`
  grid-area: menu;
`;

export const FooterArea = styled.footer`
  grid-area: footer;
`;
