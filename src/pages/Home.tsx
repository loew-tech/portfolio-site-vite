import { BriefcaseBusiness, GraduationCap, User } from "lucide-react";

import ResumeSection from "../components/ResumeSection";
import WorkExperienceElement from "../components/WorkExperienceElement";
import { education } from "../data/education";
import { experience } from "../data/experience";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <main className="home-page">
      <header className="home-page__header">
        <h1>Steve ML</h1>
        <p>Software Developer</p>
      </header>

      <ResumeSection title="About Me" icon={<User />}>
        <p>
          Software developer with experience building applications across
          frontend, backend, and cloud infrastructure.
        </p>
      </ResumeSection>

      <ResumeSection title="Experience" icon={<BriefcaseBusiness />}>
        {experience.map((job) => (
          <WorkExperienceElement key={`${job.company}-${job.title}`} {...job} />
        ))}
      </ResumeSection>

      <ResumeSection title="Education" icon={<GraduationCap />}>
        {education.map((item) => (
          <article key={`${item.institution}-${item.degree}`}>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span>{item.dates}</span>
          </article>
        ))}
      </ResumeSection>
    </main>
  );
};

export default HomePage;
