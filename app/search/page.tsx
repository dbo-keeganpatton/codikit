'use client'

import React, { useState } from 'react'
import styles from "./search.module.css"
import { Box, TextField } from '@mui/material'
import TemporaryDrawer from '@/components/sideBar'
import { ClientSideRowModelModule, ColDef } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { ModuleRegistry } from 'ag-grid-community'
ModuleRegistry.registerModules([ClientSideRowModelModule])


type CarData = {
  make: string
  model: string
  price: number
  electric: boolean
}


const Search = () => {

    const [rowData] = useState<CarData[]>([
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ])

    const [colDefs] = useState<ColDef<CarData>[]>([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
        { field: 'electric' },
    ])

    return (
        
        <div className={styles.mainParent}>
          
        {/* Sidebar */}
          <TemporaryDrawer />

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
              style={{ width: '100%', height: 500}}
            >
              <AgGridReact<CarData> rowData={rowData} columnDefs={colDefs} />
            </div>
          </main>
        </div>
      )
}

export default Search
