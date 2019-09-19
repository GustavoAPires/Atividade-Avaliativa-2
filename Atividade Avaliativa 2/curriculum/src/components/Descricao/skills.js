import React from "react";
import "./styles.css";
function Skill(props) {
  return <h2>Skill: {props.skill}.</h2>;
}
Skill.defaultProps = {
  skill: "Nenhuma"
};
export default Skill;
