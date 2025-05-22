'use client'

import Link from 'next/link'
import CabinIcon from '@mui/icons-material/Cabin'
import React, { useState } from 'react'
import styles from "./search.module.css"
import TemporaryDrawer from '@/components/sideBar'



const Search = () => {
    
    return (
        <div>
        
        <Link href="/">
        <CabinIcon className={styles.homeButton} fontSize="large"/>
        </Link>  


        {/* Sidebar */}
        <div style={{ position: 'absolute', left: '0px'}}>
        <TemporaryDrawer />
        </div> 

        <div className={styles.mainParent}>
          

          <main className={styles.main}></main>
                      
        </div>

      </div>
      )
}

export default Search
