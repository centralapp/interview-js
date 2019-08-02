import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

//Main Components
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Categories from "./Components/Catgeories/Categories";
import AlertError from "./common/ErrorSnack/AlertError";

function App() {
  const [list, setList] = useState([]);
  const [shadow, setShadow] = useState(false);
  const [alertError, setAlertError] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //eslint-disable-next-line
  }, []);

  const handleScroll = () => {
    if (getBodyScrollTop() > 0) setShadow(true);
    else setShadow(false);
  };

  const getBodyScrollTop = () => {
    const e = document.scrollingElement || document.documentElement;
    return e.scrollTop;
  };

  return (
    <Container className="App">
      <div className="wrapper">
        <Row className={shadow ? "fixed shadowed" : "fixed"}>
          <Col md="12">
            <Header />
          </Col>
          <Col md="12">
            <Search
              list={list}
              setList={setList}
              setAlertError={setAlertError}
            />
          </Col>
        </Row>
      </div>
      <Categories list={list} setList={setList} />
      <AlertError alertError={alertError} setAlertError={setAlertError} />
    </Container>
  );
}

export default App;
