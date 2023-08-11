// body.js

import { About } from "./about";
import { Projects } from "./project";
import { Skills } from "./skills";
import { Contact } from "./contact";


export const Body = () => {
  return (
    <>
      <div className="bodybg">
        <About />
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </>
  );
};

