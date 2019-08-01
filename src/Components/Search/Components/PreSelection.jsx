import React from "react";
import { Row } from "reactstrap";
import style from "./styles.module.css";

function PreSelection({ ...props }) {
  const { preSelection } = props;
  return (
    <div className={style.selection}>
      <div style={{ whiteSpace: "nowrap" }}>
        {preSelection}
        <span className={style.rmSelection} onClick={() => alert("remove")}>
          x
        </span>
      </div>
    </div>
  );
}

export default PreSelection;
