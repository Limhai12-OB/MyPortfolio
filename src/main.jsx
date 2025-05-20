import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Me from "./component/me";
import AboutMe from "./component/MySelf";
import ProjectCard from "./component/ProjectCard";
import ContactMe from "./Component/ContactMe";
import Footer from "./component/footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Me />
      <AboutMe />
      <ProjectCard />
      <ContactMe />
      <Footer />
    </div>
  </StrictMode>
);
