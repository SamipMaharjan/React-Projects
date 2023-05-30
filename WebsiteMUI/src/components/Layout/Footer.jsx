import { Box, Typography } from '@mui/material'
import React from 'react'
import { FooterStyles } from '../../styles/Styles'

export default function Footer() {
  return (
    <>
        <FooterStyles>

            <Typography variant="h5" sx={{
                "@media (max-wdith: 600px)":{
                    fontSize: "1rem",
                },
            }}>
                All rights reserved
            </Typography>

        </FooterStyles>

        
    </>
  )
}
