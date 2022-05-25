import React from "react";
import styles from "./Collapse.module.css";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = React.useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className={styles.collapse}>
      <div onClick={handleToggle} className={styles.button}>
        <span>{title}</span>
      </div>
      <div
        className={styles.collapseContent}
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
