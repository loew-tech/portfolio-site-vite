import { GraduationCap } from "lucide-react";
import "./App.css";
import ResumeSection from "./components/ResumeSection";
import WorkExperienceElement from "./components/WorkExperienceElement";

function App() {
  return (
    <>
      <ResumeSection title="Work Experience" icon={<GraduationCap />}>
        <WorkExperienceElement
          company="Acme"
          title="Software Engineer"
          dates="2022–2026"
          bullets={["lorem ipsum...", "lorem ipsum..."]}
        />
      </ResumeSection>
    </>
  );
}

export default App;
