import React from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
  Photos,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Text />
      <Image />
      <Finder />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
