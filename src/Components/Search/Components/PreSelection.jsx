//Preselections are shown inside the text input field.
//One step before adding them to the List
import React from "react";
import style from "./styles.module.css";

const PreSelection = ({ ...props }) => {
  const { preSelection, removeSelection } = props;
  return (
    <div className={style.selection}>
      <div style={{ whiteSpace: "nowrap" }}>
        {preSelection.name}
        <span
          className={style.rmSelection}
          onClick={() => removeSelection(preSelection)}
        >
          x
        </span>
      </div>
    </div>
  );
};

export default PreSelection;
