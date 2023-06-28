
import ReactMarkdown from 'react-markdown';

function MarkdownPreview(props) {
  return (
    <div className="markdown-wrapper markdown-preview-wrapper">
      <ReactMarkdown children={props.markdown} />
    </div>
  );
}

export default MarkdownPreview;