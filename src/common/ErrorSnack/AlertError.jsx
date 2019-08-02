import React from "react";
import { Row, Alert } from "reactstrap";

import style from "Components/Search/Components/styles.module.css";
import isEmpty from "../is-empty";

function AlertError({ ...props }) {
  const { alertError, setAlertError } = props;
  return (
    <Row className={style.alert}>
      <Alert
        color="danger"
        isOpen={!isEmpty(alertError)}
        toggle={() => setAlertError("")}
      >
        {alertError}
      </Alert>
    </Row>
  );
}

export default AlertError;
