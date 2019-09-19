import React from "react";
import "./styles.css";
function Formacao(props) {
  return <h2>Formação Acadêmica: {props.formacao}.</h2>;
}
Formacao.defaultProps = {
  formacao: "Nenhuma Formação"
};
export default Formacao;
