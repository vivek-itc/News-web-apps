import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CardList from "./../CardList/index";
import {
    Grid
} from '@mui/material'
import { createTheme } from '@mui/material/styles';


export default function Dashboard() {

    return (
        <Box component="main" sx={{ p: 10 }}>
            <Grid container spacing={1}>
                <Grid item md={3}>
                    <CardList />
                </Grid>
                <Grid item md={3}>
                    <CardList />
                </Grid>
                <Grid item md={3}>
                    <CardList />
                </Grid>
                <Grid item md={3}>
                    <CardList />
                </Grid>
            </Grid>
            {/* <Toolbar /> */}
            {/* <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardList />

                </Grid>
                <Grid item xs={6}>
                    <CardList />

                </Grid>
            </Grid> */}
        </Box>
    )
}