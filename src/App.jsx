import React from "react";
import { Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Vocals from "./components/Vocals";
import Guitar from "./components/Guitar";
import Bass from "./components/Bass";
import Drums from "./components/Drums";
import NavBar from "./components/NavBar";
import  "./App.css";



function App() {
  return (
    <main>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route path="/vocals" element={<Vocals />} />
              <Route path="/guitar" element={<Guitar />} />
              <Route path="/bass" element={<Bass />} />
              <Route path="/drums" element={<Drums />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}

export default App;
