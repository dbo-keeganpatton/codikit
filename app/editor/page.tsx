'use client';

import React, { useState } from 'react'; 
import styles from './editor.module.css'
import TemporaryDrawer from '@/components/sideBar'
import MdMainEditor from '@/components/mdEditorGui';




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
                 
                 <div>

                    {/*********************************************
                                    Core Editor
                    ***********************************************/}
                    <MdMainEditor /> 
                 
                 </div>   
               </main>
            
            </div>
       </div>
       );
};

export default editorPage;

