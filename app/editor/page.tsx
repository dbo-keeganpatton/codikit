'use client';

import React, { useState } from 'react'; 
import styles from './editor.module.css'
import TemporaryDrawer from '@/components/sideBar'
import MainEditor from '@/components/editorGui'; 
import MdMainEditor from '@/components/mdEditorGui';




/***********************************************
!            Core UI Starts Here               !
***********************************************/
const editorPage = () => {
   
   const [buttonDefault, buttonClicked] = useState(true);

   return (
   
       <div>

          {/* This is the side bar component */}
          <TemporaryDrawer />     
             
             <div className={styles.mainParent}>
       

               <h1 className={styles.h1}> Editing Nook </h1>
               <main className={styles.main}>
                 
                 <div>

                    {/*********************************************
                                    Editor Tool Bar
                    ***********************************************/}
                    <div className={styles.editorToolbarContainer}>
                    
                       <button
                       className={styles.editorToolbarItem}
                       onClick={() => buttonClicked((prev) => !prev)}
                       >
                       Markdown Mode
                       </button>
                    
                    </div>

                    {/*********************************************
                                    Editor States
                    ***********************************************/}
                    {buttonDefault ? <MainEditor /> : <MdMainEditor />} 
                 
                 </div>   
               </main>
            
            </div>
       </div>
       );
};

export default editorPage;

