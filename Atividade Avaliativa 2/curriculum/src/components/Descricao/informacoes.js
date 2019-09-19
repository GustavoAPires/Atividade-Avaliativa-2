import React from "react";
import "./styles.css";
function Informacoes(props) {
  return (
    <h2>
      Nome: {props.name}. <p>Idade: {props.idade}.</p> <p>CIdade: {props.cidade}.</p>
    </h2>
  );
}
Informacoes.defaultProps = {
  name: "Sem Nome",
  idade: "Sem Idade",
  cidade: "Nenhuma Cidade"
};
export default Informacoes;
