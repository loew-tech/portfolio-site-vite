import { CalendarDays } from "lucide-react";

import MarkdownContent from "./MarkdownContent";

import "./WorkExperienceElement.scss";

interface WorkExperienceElementProps {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}
const WorkExperienceElement = ({
  company,
  title,
  dates,
  bullets,
}: WorkExperienceElementProps) => {
  return (
    <article className="work-experience-element">
      <header className="work-experience-element__header">
        <h3 className="work-experience-element__company">{company}</h3>

        <span className="work-experience-element__dates">
          <CalendarDays size={14} />
          {dates}
        </span>
      </header>

      <h4 className="work-experience-element__title">{title}</h4>
      <ul>
        {bullets.map((bullet, i) => (
          <li key={`${title}-${i}`}>
            <MarkdownContent content={bullet} />
          </li>
        ))}
      </ul>
    </article>
  );
};
export default WorkExperienceElement;
