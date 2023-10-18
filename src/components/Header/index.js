import React from "react";
import { navList, portfolioData } from "../../porfolioData";
import styles from "./style.module.css";

function Header() {
  const [section, setSection] = React.useState("Introduction");

  function handleNavItemClick(sectionName) {
    setSection(sectionName);
    const currentSection = document.getElementById(sectionName);
    currentSection.scrollIntoView();
  }

  const renderNavBar = () => {
    return (
      <div className={styles.navBar}>
        <div
          style={{
            background: "white",
            width: "fit-content",
            height: "fit-content",
            borderRadius: "25px",
            cursor: "pointer",
          }}
        >
          <img
            width="48"
            height="48"
            src="linkedinIcon.svg"
            alt="Linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/pramil-dwivedi-145458219"
              )
            }
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/filled-message.png"
            alt="filled-message"
            onClick={() => {
              navigator.clipboard.writeText("pramilvbn46@gmail.com");
              const clipboard = document.getElementById("clipboard");
              clipboard.style.display = "block";
              setTimeout(() => {
                clipboard.style.display = "none";
              }, 1000);
            }}
          />
        </div>
        <span id="clipboard" style={{ display: "none" }}>
          Coiped!
        </span>
        {navList.map((listItem, index) => {
          return (
            <span
              key={index}
              onClick={() => handleNavItemClick(listItem)}
              className={`${styles.navItem} ${
                section === listItem ? styles.decorate : ""
              }`}
            >
              {listItem}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className={styles.header}>
        {renderNavBar()}

        <div id="Introduction" className={styles.intro}>
          {"Hello Everyone,I am"}
          <span className={styles.name}>{"Pramil Dwivedi"}</span>
          {"a creature that converts caffine into code."}
        </div>
      </div>
    </>
  );
}

export default Header;
