import React from "react";
import "./styles.css";
function Lingua(props) {
  return <h2>Línguas: {props.lingua}.</h2>;
}
Lingua.defaultProps = {
  lingua: "Nenhuma"
};
export default Lingua;
