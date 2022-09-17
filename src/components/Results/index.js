import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import resultList from "./../data/LatestResult.json"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  justifySelf: 'center'
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: 15, paddingX: 2 }}>
      <Typography style={{ textAlign: 'center', fontSize: 24, paddingBottom: 30 }}>Welcome to result</Typography>
      <Grid container spacing={2}>
        {resultList[0].list.map((item) => {
          return (
            <Grid item xs={6}>
              <Item>
                <FiberManualRecordIcon sx={{ fontSize: 12, color: '#000000', paddingTop: 1, paddingRight: 1 }} />
                <Typography variant="body3" color="#000" sx={{ fontSize: 18, fontWeight: 400, fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif` }}>
                  {item.description}
                </Typography>
              </Item>
            </Grid>
          )
        })
        }

      </Grid>
    </Box>
  );
}