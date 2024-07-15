import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import ImagePlugin from "./plugins/ImagePlugin";
import { ImageNode } from "./nodes/ImageNode";
import ExampleTheme from "./themes/ExampleTheme";
import ToolbarPlugin from "./plugins/ImageToolbar";

const editorConfig = {
  theme: ExampleTheme,
  namespace: "",
  onError(error: any) {
    throw error;
  },
  nodes: [ImageNode],
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />

        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>글을 써주세요</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ImagePlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the images plugin...
    </div>
  );
}
