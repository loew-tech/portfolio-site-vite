import Markdown from "react-markdown";

import "./WorkExperienceElement.scss";
import { Calendar } from "lucide-react";

interface WorkExperienceElementProps {
  company: string;
  title: string;
  bullets: string[];
  dates: string;
}

const WorkExperienceElement = ({
  company,
  title,
  bullets,
  dates,
}: WorkExperienceElementProps) => {
  return (
    <article className="work-experience-element">
      <header className="work-experience-element__header">
        <h3 className="work-experience-element__company">{company}</h3>

        <span className="work-experience-element__dates">
          <Calendar size={14} />
          {dates}
        </span>
      </header>

      <h4 className="work-experience-element__title">{title}</h4>

      <ul>
        {bullets.map((bullet, i) => (
          <li key={`${title}-${i}`}>
            <Markdown>{bullet}</Markdown>
          </li>
        ))}
      </ul>
    </article>
  );
};
export default WorkExperienceElement;
