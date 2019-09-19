import React from "react";
import Informacoes from "./components/Resume/informacoes";
import Skill from "./components/Resume/skills";
import Experiencia from "./components/Resume/experiencias";
import Lingua from "./components/Resume/linguas";
import Formacao from "./components/Resume/formacao";

import "./styles.css";

function App() {
  return (
    <li>
      <center>
        <h1>Currículo</h1>
        <li><Informacoes name="Gustavo Pires" idade="19" cidade="Santa Cruz das Palmeiras" /></li>
        <li><Skill skill="Analista de Sistemas" /></li>
        <li><Experiencia experiencia="Desenvolvimento Mobile" /></li>
        <li><Lingua lingua="Inglês Avançado " /></li>
        <li><Formacao formacao="Graduação em Análise e Desenvolvimento de Sistemas - UNIFEOB" /></li>
      </center>
    </li>
  );
}

export default App;
