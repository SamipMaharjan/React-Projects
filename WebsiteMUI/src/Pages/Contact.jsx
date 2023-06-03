import { Box, Typography, TableContainer, TableRow, TableHead, Table, TableCell, Paper, TableBody } from '@mui/material'
import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function Contact() {
  return (
    <>
     <Box sx={{margin: '25px'}}>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>

        <Typography>
        We would love to hear from you! If you have any questions, feedback, or would like to make a reservation, please don't hesitate to contact us. Our team at the restaurant is dedicated to providing exceptional dining experiences and top-notch customer service. You can reach us by phone at 9865058767 during our business hours, or simply fill out the contact form below. We will get back to you as soon as possible. Thank you for considering the restaurant and we look forward to serving you!"
        </Typography>
     </Box>

      <Box sx={{ margin: 3, width: '600px'}}>
        <TableContainer component={Paper} >
          <Table aria-label='Contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white', width: '100%'}} align='center'>Contact Details </TableCell> 
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell><SupportAgentIcon sx={{ color: 'red', pt: 1, fontSize: '4rem' }}/> 119823989123</TableCell>

                <TableCell></TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: 'skyBlue', pt: 1, fontSize: '4rem' }} />help@myRest.com 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1, fontSize: '4rem' }} /> 98774779111 
                </TableCell> 
              </TableRow>
            </TableBody>

          </Table>
        </TableContainer>
      </Box>
    </>
     
  )
}
