import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link, useLocation } from 'react-router-dom';



export default function SpanningTable() {
  const { state } = useLocation();

  return (
    <Box sx={{ bgcolor: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 10 }} Spanning={3}>
      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table sx={{}} aria-label="spanning table">
          <TableHead sx={{ bgcolor: '#80add9' }}>
            <TableRow>
              <TableCell align="center" colSpan={4} sx={{ fontSize: 16, fontWeight: "600", color: '#fff' }}>
                Welcome to Job
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow >
              <TableCell sx={{ width: "30%", color: 'red' }}>{"Name of Post:"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd', color: 'green', fontWeight: 'bold', fontSize: 16 }}>{state.item.description}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{ color: 'red' }}>{"Post Date / Update:"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd' }}>{state.item.description}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell >{"Short Information:"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd' }}>{"Staff Selection Commission (SSC) has released the notification of Combined Graduate Level CGL Examination 2022. All the candidates who are interested in this CGL 2022 recruitment and fulfill the eligibility can apply online from 17 September 2022 to 08 October 2022. Read the notification for eligibility, age limit, selection procedure, syllabus, pattern, pay scale and all other information in SSC CGL Recruitment Exam 2022."}</TableCell>
            </TableRow>

            <TableRow >
              <TableCell >{"Application Fee:"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd' }}>{"Staff Selection Commission (SSC) has released the notification of Combined Graduate Level CGL Examination 2022. All the candidates who are interested in this CGL 2022 recruitment and fulfill the eligibility can apply online from 17 September 2022 to 08 October 2022. Read the notification for eligibility, age limit, selection procedure, syllabus, pattern, pay scale and all other information in SSC CGL Recruitment Exam 2022."}</TableCell>
            </TableRow>

            <TableRow >
              <TableCell >{"Important Dates"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd' }}>{"Staff Selection Commission (SSC) has released the notification of Combined Graduate Level CGL Examination 2022. All the candidates who are interested in this CGL 2022 recruitment and fulfill the eligibility can apply online from 17 September 2022 to 08 October 2022. Read the notification for eligibility, age limit, selection procedure, syllabus, pattern, pay scale and all other information in SSC CGL Recruitment Exam 2022."}</TableCell>
            </TableRow>

            <TableRow >
              <TableCell >{"Age Limit Details"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd' }}>{"Staff Selection Commission (SSC) has released the notification of Combined Graduate Level CGL Examination 2022. All the candidates who are interested in this CGL 2022 recruitment and fulfill the eligibility can apply online from 17 September 2022 to 08 October 2022. Read the notification for eligibility, age limit, selection procedure, syllabus, pattern, pay scale and all other information in SSC CGL Recruitment Exam 2022."}</TableCell>
            </TableRow>

            <TableRow >
              <TableCell >{"Eligibility"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd' }}>{"Staff Selection Commission (SSC) has released the notification of Combined Graduate Level CGL Examination 2022. All the candidates who are interested in this CGL 2022 recruitment and fulfill the eligibility can apply online from 17 September 2022 to 08 October 2022. Read the notification for eligibility, age limit, selection procedure, syllabus, pattern, pay scale and all other information in SSC CGL Recruitment Exam 2022."}</TableCell>
            </TableRow>

            <TableRow >
              <TableCell >{"Post Name"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd' }}>{"Staff Selection Commission (SSC) has released the notification of Combined Graduate Level CGL Examination 2022. All the candidates who are interested in this CGL 2022 recruitment and fulfill the eligibility can apply online from 17 September 2022 to 08 October 2022. Read the notification for eligibility, age limit, selection procedure, syllabus, pattern, pay scale and all other information in SSC CGL Recruitment Exam 2022."}</TableCell>
            </TableRow>

            <TableRow >
              <TableCell >{"Total Post"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd', fontSize: 18, fontWeight: 600 }}>{"2500."}</TableCell>
            </TableRow>

            <TableRow >
              <TableCell sx={{ color: 'red' }}>{"Apply Online"}</TableCell>
              <TableCell align="left" sx={{ borderLeft: 1, borderColor: '#ddd', fontSize: 18, color: 'green', fontWeight: 600 }}>{"Click Here."}</TableCell>
            </TableRow>

            

            {/* ))} */}

            {/* <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
