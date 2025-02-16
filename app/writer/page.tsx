'use client';

import React from 'react'; 
import styles from './writer.module.css'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

function onError(error: Error) {
  console.error(error);
}

const Writer = () => {
  const initialConfig = {
    namespace: 'MyEditor',
    onError,
    theme: styles
  };

  
/***********************************************
!            Core UI Starts Here               !
***********************************************/
return (
    
   <main className={styles.main}>
       
       <h1 className={styles.h1}> Editing Nook </h1>

        {/* Lexical Text Editor Start */}      
        <LexicalComposer initialConfig={initialConfig}>
       
            <div className={styles.editorContainer}>
            
                <RichTextPlugin 
                    contentEditable={<ContentEditable className={styles.editorParagraph} />}
                    placeholder={<div className={styles.editorPlaceholder}> Start Writing! </div>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <HistoryPlugin />
                <AutoFocusPlugin />
            
            </div> 
        
        </LexicalComposer>
        {/* Lexical Text Editor End  */} 

   </main>

    );
};

export default Writer;

