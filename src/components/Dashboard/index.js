import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CardList from "./../CardList/index";
import {
    Grid
} from '@mui/material'
import jobList from "./../data/LatestJob.json"
import resultList from "./../data/LatestResult.json"
import AdmitCard from "./../data/AdmitCard.json"
import ANSWERKEY from "./../data/ANSWERKEY.json"
import SarkariYojna from "./../data/SarkariYojna.json"
import Syllabus from "./../data/Syllabus.json"

let array = [];

export default function Dashboard() {
    const [datalist, setDataList] = React.useState([])

    React.useEffect(() => {
        array = [...resultList, ...AdmitCard, ...jobList, ...SarkariYojna, ...ANSWERKEY, ...Syllabus]
        setDataList(array)
    }, [])


    return (
        <Box component="main" sx={{ paddingTop: 5, paddingX: 2 }}>
            <Toolbar />
            <Grid container spacing={1.2} sx={{ height: '100%', borderColor: 'red' }}>
                {datalist.map((item) => {
                    return (
                        <Grid item md={3} >
                            <CardList data={item} />
                        </Grid>
                    )
                })}
            </Grid>
            <Toolbar />
        </Box>
    )
}