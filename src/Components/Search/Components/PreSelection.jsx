import React from "react";
import style from "./styles.module.css";

function PreSelection({ ...props }) {
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
}

export default PreSelection;
