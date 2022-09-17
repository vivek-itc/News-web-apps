import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';


export default function FixedContainer({ route }) {
  const { state } = useLocation();


  console.log(state)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Box component="span" sx={{ border: '1px solid grey', boxShadow: 2, borderRadius: 2, height: '70%', width: '95%', paddingTop: 2 }}>
            <Box component="span" sx={{ bgcolor: '#fff', height: 70, display: 'flex', borderBottom: '1px solid grey' }} >
              <Box component="span" sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Box component="span" sx={{ justifyContent: 'center', display: 'flex', width: '20%', paddingBottom: 2 }}>
                  <img src={require('./../../Images/logo.png')} style={{ width: 50, height: 50 }} />
                </Box>
                <Box component="span" sx={{ display: 'flex', justifyContent: 'center', minWidth: '60%', }}>
                  <Typography sx={{ fontSize: 18, fontWeight: "600" }}>{state.item.description}</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%' }}>
              <Button onClick={()=>window.location.assign(state.item.uri)}>
                <Typography sx={{ fontSize: 14, fontWeight: "600", color: 'red' }}>Click here</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
