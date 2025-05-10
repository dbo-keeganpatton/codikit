'use client'

import Link from 'next/link'
import CabinIcon from '@mui/icons-material/Cabin'
import React, { useState } from 'react'
import styles from "./search.module.css"
import { Box, TextField } from '@mui/material'
import TemporaryDrawer from '@/components/sideBar'
import { ClientSideRowModelModule, ColDef } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { ModuleRegistry } from 'ag-grid-community'
ModuleRegistry.registerModules([ClientSideRowModelModule])


type CarData = {
  author: string
  title: string
  genre: string
  createdDate: string
  modifiedDate: string
}


const Search = () => {

    const [rowData] = useState<CarData[]>([
        { author: 'Cillian', title: 'Steggy The Dino', genre: 'Model Y', createdDate: "2024-05-14", modifiedDate: "2024-05-14" },
        { author: 'Mom', title: 'Vignettes of Passage', genre: 'F-Series', createdDate: "1990-11-03", modifiedDate: "1990-11-03" },
        { author: 'Dad', title: 'A Dummmies guide to being dumb', genre: 'Corolla', createdDate: "1994-03-19", modifiedDate: "1994-03-19" },
    ])

    const [colDefs] = useState<ColDef<CarData>[]>([
        { field: 'author'},
        { field: 'title' },
        { field: 'genre' },
        { field: 'createdDate' },
        { field: 'modifiedDate' },
    ])

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
            
            {/* Search bar */}
            <Box component="form" autoComplete="on">
              <TextField
                id="filled-basic"
                label="Search"
                variant="filled"
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                  '& .MuiFilledInput-underline:before': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiFilledInput-underline:after': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white',
                    opacity: 1,
                  },
                }}
              />
            </Box>

            
            {/* AG Grid */}
            <div
              className="ag-theme-alpine"
              style={{ width: "50vw", height: 500}}
            >
              <AgGridReact<CarData> rowData={rowData} columnDefs={colDefs} />
            </div>
          </main>
        </div>

      </div>
      )
}

export default Search
