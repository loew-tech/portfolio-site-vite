import type { ReactNode } from "react";

import "./ResumeSection.scss";

interface ResumeSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const ResumeSection = ({ title, icon, children }: ResumeSectionProps) => {
  return (
    <section className="resume-section">
      <header className="resume-section__header">
        {icon}
        <h2>{title}</h2>
      </header>

      <div className="resume-section__content">{children}</div>
    </section>
  );
};
export default ResumeSection;
