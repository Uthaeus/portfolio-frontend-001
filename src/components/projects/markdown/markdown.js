import { useState, useContext } from "react";

import MarkdownEditor from "./markdown-editor";
import MarkdownPreview from "./markdown-preview";
import { UserContext } from "../../store/user-context";


function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('## Enter Markdown Here, see it appear on the right');
  const { user } = useContext(UserContext);

  return (
    <div className="markdown-previewer-container">
      <div className="markdown-header">
        <h1 className="markdown-title">{user && `${user.username}'s `}Markdown Previewer</h1>
        <button className="markdown-reset" onClick={() => setMarkdown('')}>Reset Markdown</button>
      </div>

      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      <MarkdownPreview markdown={markdown} />
    </div>
  );
}

export default MarkdownPreviewer;