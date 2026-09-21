import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./MarkdownContent.scss";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const MarkdownContent = ({ content, className }: MarkdownContentProps) => {
  return (
    <div className={`markdown-content ${className ?? ""}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
