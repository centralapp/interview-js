import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import isEmpty from "./common/is-empty";
import "./App.css";

//Main Components
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Categories from "./Components/Catgeories/Categories";

function App() {
  const [list, setList] = useState([]);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (getBodyScrollTop() > 0) setShadow(true);
    else setShadow(false);
  };

  function getBodyScrollTop() {
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
  }

  return (
    <Container className="App">
      <div className="wrapper">
        <Row className={shadow ? "fixed shadowed" : "fixed"}>
          <Col md="12">
            <Header />
          </Col>
          <Col md="12">
            <Search list={list} setList={setList} />
          </Col>
        </Row>
      </div>
      <Categories list={list} setList={setList} />
    </Container>
  );
}

export default App;
