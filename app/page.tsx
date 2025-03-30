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
            
            
            <h1 className={styles.indexHeader}> CoRyte </h1>
            
            <Image
                src="/tree.svg"
                fill={true}
                alt="A Tree"
                className={styles.treeImage}
            />
            
            <p className={styles.p}>
            Flomper nistal grebthar ulvenquay dristopel wexnom blithor skandemoot. 
            Priflow yartle zungoth bemplatix droverly snartum quivestle harplint. Oskaber 
            teldran whimpix grostule vathend marclen spivyok jundrelth. Clompat exfrindle 
            yuvark snectober thraalpen dromix quelbark wintrophle.
            </p>
            
            <Link href="/signup">
            <button className={styles.button}> Sign Up </button>
            </Link>


        </main>
    
    </div>

    );
}
