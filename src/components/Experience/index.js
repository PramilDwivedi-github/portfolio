import React from "react";
import Styles from "./style.module.css";
import Card from "../Card";
import { Experiences } from "../../porfolioData";
import Modal from "../Modal";

export default function Experience() {
  const [showExperienceModal, setShowExperienceModal] = React.useState({
    show: false,
    experience: null,
  });

  function getExperienceDescription(experience) {
    if (!experience) return experience;
    return (
      <div>
        <h4>{`Role - `}</h4>
        <span>{experience.description.role}</span>
        <h4>{`Duration - `}</h4>
        <span>{experience.description.duration}</span>
        <h4>{`Responsibilities - `}</h4>
        <span>{experience.description.responsibility}</span>
      </div>
    );
  }

  return (
    <div id="Experience" className={Styles.exp_container}>
      <h1 style={{ color: "white" }}>Experience</h1>
      <div className={Styles.exp_list}>
        {Experiences.map((exp, ind) => {
          return (
            <Card
              imageUrl={exp.imageUrl}
              onClick={() => {
                setShowExperienceModal({ show: true, experience: exp });
              }}
            />
          );
        })}
      </div>

      <Modal
        id={"exp_modal"}
        title={
          showExperienceModal &&
          showExperienceModal.experience &&
          showExperienceModal.experience.companyName
        }
        show={showExperienceModal.show}
        onClose={() =>
          setShowExperienceModal({ show: false, experience: null })
        }
        body={getExperienceDescription(showExperienceModal.experience)}
      />
    </div>
  );
}
