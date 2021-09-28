import { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={setEditorState}
      wrapperStyle={{ padding: "1em", border: "1px solid #ccc" }}
      editorStyle={{
        backgroundColor: "#f7f7f7de",
        minHeight: "30em",
        height: "auto",
        padding: "1em",
        border: "1px solid #ccc",
      }}
      toolbarStyle={{ width: "90%", border: "1px solid #ccc" }}
    />
  );
};

export default TextEditor;
