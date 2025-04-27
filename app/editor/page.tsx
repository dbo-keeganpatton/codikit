'use client';

import styles from './editor.module.css'
import TemporaryDrawer from '@/components/sideBar'
import MdMainEditor from '@/components/mdEditorGui';
import CabinIcon from '@mui/icons-material/Cabin';
import Link from 'next/link';



/***********************************************
!            Core UI Starts Here               !
***********************************************/
const editorPage = () => {
   
   return (
   
       <div>
          
          {/* This is the side bar component */}
          <TemporaryDrawer />     
           
           <Link href="/">
           <CabinIcon className={styles.homeButton} fontSize="large"/>
           </Link>  
            
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

