'use client'

import Image from "next/image";
import styles from "./page.module.css";
import TemporaryDrawer from '@/components/sideBar'
import Link from "next/link";


export default function Home() {
  return (
    
    <div className={styles.mainParent}>

        {/* This is the side bar component */}
        <TemporaryDrawer />     
        
        <main className={styles.main}>
            
            <h1 className={styles.indexHeader}> .draftyr </h1>
            
            <Image
                src="/tree.svg"
                fill={true}
                alt="A Tree"
                className={styles.treeImage}
            />
            
            <p className={styles.p}>
            A place for authors, artists, and visionaries to connect and collaborate to create
            the next generation of storytelling. We envision a future in which there are no barriers
            to the scope with which we can work together to weave narratives and explore new ideas. We 
            believe in a fundemental approach to storytelling augemented by collaboration and AI.
            
            <br /><br />
            Join our community to help tell the greatest story ever told..
            </p>
            

            <Link href="/login">
            <button className={styles.button}> Login </button>
            </Link>
   
            <Link href="/signup">
            <button className={styles.button}> Sign Up </button>
            </Link>


        </main>
    
    </div>

    );
}
