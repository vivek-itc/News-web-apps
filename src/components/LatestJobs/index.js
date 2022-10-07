import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import jobList from "./../data/LatestJob.json"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { grey } from '@mui/material/colors';
import { ROUTE } from "./../../constants/index";
import { useNavigate } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  justifySelf: 'flex-start'
}));

const CustomButton = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    // font-weight: bold;
    font-size: 0.875rem;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    width: 100%;
  
    &:hover {
      background-color: ${grey[500]};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: ${grey[700]};
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.1;
      cursor: not-allowed;
    }
  `;

export default function BasicGrid() {
  const navigate = useNavigate();


  return (
    <Box sx={{ flexGrow: 1, paddingTop: 15, paddingX: 2 }}>
      <Typography style={{ textAlign: 'center', fontSize: 24, paddingBottom: 30 }}>Welcome to Jobs</Typography>
      <Grid container spacing={2}>
        {jobList[0].list.map((item) => {
          return (
            <Grid item xs={6}>
              <CustomButton onClick={() => navigate(ROUTE.JOBSDETAILS.path, { state: { item } })}>
                <Item>
                  <Box component="span" sx={{ display: 'flex' }}>
                    <FiberManualRecordIcon sx={{ fontSize: 12, color: '#000000', paddingTop: 1, paddingRight: 1 }} />
                    <Typography variant="body3" color="#000" sx={{ fontSize: 18, fontWeight: 400, fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif` }}>
                      {item.description}
                    </Typography>
                  </Box>
                  <Box component="span" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: 'red', fontSize: 12, paddingTop: 1, fontWeight: '600' }}>{item.status}</Typography>
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon fontSize='small' />
                      <Typography sx={{ fontSize: 12, textAlignLast: 'center' }}>{item.date}</Typography>
                    </Box>
                  </Box>

                </Item>
              </CustomButton>
            </Grid>
          )
        })
        }
      </Grid>
    </Box>
  );
}