'use client'

import React from 'react'
import styles from "./search.module.css"
import { Box, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Paper } from '@mui/material'
import { TextField } from '@mui/material'
import { Table } from '@mui/material'
import { TableContainer } from '@mui/material'



function tableData (
   title: string,
   author: string,
   genre: string,
   createDate: string,
   lastModified: string,
   uid: number
) {
   return {title, author, genre, createDate, lastModified, uid}
}


const createTableRows = [
  tableData("Summer Evil", "Remy Johan", "Horror", "2025-01-01", "2025-01-05", 123),
  tableData("A Lost Affair", "Lucy Deville", "Romance", "2024-09-21", "2025-01-02", 298),
  tableData("Ragnar's Quest", "Robert Green", "Fantasy", "2025-02-01", "2025-02-01", 876),
  tableData("Simple Sayings", "Donna Lola", "Poetry", "2024-03-19", "2024-06-20", 476)
]


const search = () => {
  return (
  
  <main>
    
    {/************************
     !    Main Search Bar    !
     ************************/}
     <Box component="form" autoComplete="on">
       <TextField id="filled-basic" label="Search" variant="filled" className={styles.searchBar}/>
     </Box>
    
    
    {/************************
     !      Center Table     !
     ************************/}
     <TableContainer component={Paper} className={styles.mainTable}>
        <Table sx={{ minWidth: 650 }}>
        
           <TableHead className={styles.mainTableHeaderStyle}>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Date Created</TableCell>
                <TableCell>Last Modified</TableCell>
                <TableCell>Story ID</TableCell>
              </TableRow>
            </TableHead>
   
            <TableBody className={styles.mainTableRowStyle}>
               {createTableRows.map((row) => (
                  <TableRow
                     key={row.title}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">{row.title}</TableCell>
                     <TableCell align="right">{row.author}</TableCell>
                     <TableCell align="right">{row.genre}</TableCell>
                     <TableCell align="right">{row.createDate}</TableCell>
                     <TableCell align="right">{row.lastModified}</TableCell>
                     <TableCell align="right">{row.uid}</TableCell>
                 </TableRow>
              ))}
            </TableBody>

        </Table>
     </TableContainer>
     
   
  </main>


    );
};

export default search
