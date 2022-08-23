import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CardList from "./../CardList/index";
import {
    Grid
} from '@mui/material'

const list = ["LATEST JOBS", "LATEST RESULTS", "ADMIT CARD", "ANSWER KEY", "ADMISSION", "SYLLABUS" ]


export default function Dashboard() {

    return (
        <Box component="main" sx={{ paddingTop: 5, paddingX: 2 }}>
            <Toolbar />
            <Grid container spacing={1.2} sx={{ height: '100%' }}>
                {list.map((item) => {
                    return (
                        <Grid item md={3}>
                            <CardList title={item}/>
                        </Grid>
                    )
                })}
            </Grid>
            <Toolbar />
        </Box>
    )
}