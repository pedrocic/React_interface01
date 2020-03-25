import React from "react";
import Header from "../header/Header";

import { ContentArea } from "./content_style";

const content = props => (
  <>
    <Header {...props} />
    <ContentArea>
      <h1>Conteudo</h1>
    </ContentArea>
  </>
);

export default content;
