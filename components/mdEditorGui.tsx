import React from 'react';
import styles from '../app/editor/editor.module.css';  
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { DEFAULT_TRANSFORMERS } from '@lexical/react/LexicalMarkdownShortcutPlugin';


// Nodes for Markdown Features
import { HeadingNode } from '@lexical/rich-text';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { QuoteNode } from '@lexical/rich-text';
import { ListNode } from '@lexical/list';
import { ListItemNode } from '@lexical/list';
import { CodeNode } from '@lexical/code';
import { LinkNode } from '@lexical/link';
import { useState } from 'react';

function onError(error: Error) {
  console.error(error);
}





const MdMainEditor = () => {


    const [isSelected, setIsSelected] = useState(true);
    
    const initialConfig = {
    namespace: 'MyEditor',
    onError,

    nodes: [
       // These are all the markdown features needed
       HorizontalRuleNode,
       HeadingNode,
       QuoteNode,
       ListNode,
       ListItemNode,
       CodeNode,
       LinkNode,
    ]
  
  };

  return (
    

    <LexicalComposer initialConfig={initialConfig}>
        
        <div className={styles.editorToolbarContainer}>     
        <button
            className={styles.editorToolbarItem}
            onClick={() => setIsSelected((prev) => !prev)}
            >
            Markdown Mode
        </button>
        </div>
        
        <div className={styles.editorContainer}>
        <RichTextPlugin
          contentEditable={<ContentEditable className={styles.editorParagraph} />}
          placeholder={<div className={styles.editorPlaceholder}>Start Writing!</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        
        {/* Lexical Plugins */}
        <HistoryPlugin />
        <AutoFocusPlugin />
        {isSelected ? <MarkdownShortcutPlugin transformers={DEFAULT_TRANSFORMERS}/> : null }


      </div>
    </LexicalComposer>
  );
};

export default MdMainEditor;

