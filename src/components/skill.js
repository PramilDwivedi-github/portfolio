import React from "react";
import { skillList } from "../porfolioData";
import Card from "./Card";
import Modal from "./Modal";
import "./skill.css";

export default function Skills() {
  const [showSkillModal, setShowSkillModal] = React.useState({
    show: false,
    skill: null,
  });

  const getSkillDescription = (skill) => {
    if (!skill) return null;
    return (
      <div className="skill_description">
        {skill.description.map((bulletPoint, ind) => {
          return (
            <span key={ind} className="skill">
              {`-> ${bulletPoint}`}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div id="Skills" className="skills">
      <h1 style={{ color: "white" }}>Skills</h1>
      <div className="skills_container">
        {skillList.map((skill, ind) => (
          <Card
            imageUrl={skill.imageUrl}
            onClick={() => setShowSkillModal({ show: true, skill })}
          />
        ))}
      </div>
      <Modal
        id={"skill_modal"}
        title={
          showSkillModal && showSkillModal.skill && showSkillModal.skill.name
        }
        show={showSkillModal.show}
        onClose={() => setShowSkillModal({ show: false, skill: null })}
        body={getSkillDescription(showSkillModal.skill)}
      />
    </div>
  );
}
