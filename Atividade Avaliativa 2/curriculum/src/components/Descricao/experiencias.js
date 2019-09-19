import React from "react";
import "./styles.css";
function Experiencia(props) {
  return <h2>Experiência: {props.experiencia}.</h2>;
}
Experiencia.defaultProps = {
  experiencia: "Sem Experiência"
};
export default Experiencia;
