'use client';

import React from 'react'; 
import styles from './editor.module.css'
import TemporaryDrawer from '@/components/sideBar'
import MainEditor from '@/components/editorGui'; 
// MarkDown Parser
import Markdown from 'react-markdown';



/***********************************************
!            Core UI Starts Here               !
***********************************************/
const editorPage = () => {
   return (
   
       <div>

          {/* This is the side bar component */}
          <TemporaryDrawer />     
             
             <div className={styles.mainParent}>
       

               <h1 className={styles.h1}> Editing Nook </h1>
               <main className={styles.main}>
                 
                 {/* This is the Editor Component */}
                  <MainEditor />
                    
               </main>
            
            </div>
       </div>
       );
};

export default editorPage;

