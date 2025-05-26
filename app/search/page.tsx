'use client'

import GET from '../api/gutendex/route'
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
    title: string
    authors: string
    

}


const Search = () => {

      const [colDefs] = useState<ColDef<CarData>[]>([
        { field: 'author'},
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
                    bgcolor: '#2e2c31',
                    borderRadius: '4px',
                    borderColor: '#bacbdb'

                }}
              />
            </Box>
            
            <button onClick={GET}> Fuck </button>
            
            {/* AG Grid */}
            <div
              className={styles.body}
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
