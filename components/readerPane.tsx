'use client'

import Link from 'next/link'
import CabinIcon from '@mui/icons-material/Cabin'
import React, { useState } from 'react'
import styles from "./search.module.css"
import TemporaryDrawer from '@/components/sideBar'
import { ReactReader } from 'react-reader'


const Search = () => {
    
    const [location, setLocation] = useState<string | number>(0)

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
          
        
          <main className={styles.main}>
            
          <div style={{ height: '100vh' }}>
          <ReactReader
          url="https://www.gutenberg.org/cache/epub/76128/pg76128-images.html"
          location={location}
          locationChanged={(epubcfi: string) => setLocation(epubcfi)}
          />
          </div>


          </main>
                      
        </div>

      </div>
      )
}

export default Search
