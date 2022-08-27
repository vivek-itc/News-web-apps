import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CardList from "./../CardList/index";
import {
    Grid
} from '@mui/material'
import jobList from "./../data/LatestJob.json"
import resultList from "./../data/LatestResult.json"

const list = ["LATEST UPDATE", "LATEST RESULTS", "ADMIT CARD", "ANSWER KEY", "ADMISSION", "SYLLABUS"]

let array = [];

export default function Dashboard() {
    const [datalist, setDataList] = React.useState([])

    React.useEffect(()=>{
        array = [...jobList, ...resultList]
        setDataList(array)
        
    }, [])
    console.log('JSON===>', array);

    return (
        <Box component="main" sx={{ paddingTop: 5, paddingX: 2 }}>
            <Toolbar />
            <Grid container spacing={1.2} sx={{ height: '100%' }}>
                {datalist.map((item) => {
                    return (
                        <Grid item md={3}>
                            <CardList title={item.title} />
                        </Grid>
                    )
                })}
            </Grid>
            <Toolbar />
        </Box>
    )
}