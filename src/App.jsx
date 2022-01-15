import "./App.css";
import React from "react";
// import Word from "./components/word";
import Home from "./components/home";
import { Routes, Route, Link } from "react-router-dom";
import AllWords from "./components/allwords";
import Search from "./components/search";
import Word from "./components/word";
import Drawer from "react-modern-drawer";
//import styles 👇
import Developer from "./images/developer.jpg";
import "react-modern-drawer/dist/index.css";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleDrawerBack = () => {
    setIsOpen((prevState) => !prevState);
  };
  if (window.innerWidth < 554) {
    return (
      <>
        <div className="navIcon" onClick={toggleDrawer}>
          &#9776;
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
          duration={200}
        >
          <center>
            <img className="developer-img" src={Developer} alt="developer" />
            <h3>
              Developer <br />
              Mudasir Pandith <br />
              <p style={{ fontSize: "14px", marginTop: "-2px" }}>
                mudasir_2020bece030@nitsri.net
              </p>
            </h3>
            <hr />
          </center>
          <Link onClick={toggleDrawerBack} className="link" to="/">
            Home{" "}
          </Link>
          <Link onClick={toggleDrawerBack} className="link" to="/allwords">
            All Words{" "}
          </Link>
          <Link onClick={toggleDrawerBack} className="link" to="/search">
            Search{" "}
          </Link>
          <center>
            <p style={{ position: "absolute", bottom: "0", width: "100%" }}>
              Versoin 1.0.0
            </p>
          </center>
        </Drawer>
        <h1 className="app-title">Kaeshir Dictionary</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allwords" element={<AllWords />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/search/:word" element={<Word />} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1 className="web-app-title">Kaeshir Dictionary</h1>
          <Link onClick={toggleDrawerBack} className="web-link" to="/">
            Home{" "}
          </Link>
          <Link onClick={toggleDrawerBack} className="web-link" to="/allwords">
            All Words{" "}
          </Link>
          <Link onClick={toggleDrawerBack} className="web-link" to="/search">
            Search{" "}
          </Link>
          <hr />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/allwords" element={<AllWords />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/search/:word" element={<Word />} />
          </Routes>
        </div>
      </>
    );
  }
};

export default App;
