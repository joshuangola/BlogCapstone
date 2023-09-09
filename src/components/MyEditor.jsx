import React from "react";
import { Editor } from "draft-js";
import "draft-js/dist/Draft.css";

const MyEditor = ({ editorState, onChange }) => {
  return <Editor editorState={editorState} onChange={onChange} />;
};

export default MyEditor;
