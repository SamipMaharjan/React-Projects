import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styled, Paper } from "@mui/material";

export default function Footer() {

    const FooterStyles = styled( Paper )({
        textAlign: "center",
        backgroundColor: "#1A1A19",
        color: "white",
        padding: 3    
    })

  return (
    <>

        <FooterStyles>

        {/* box for icons  */}
        <Box>
            <InstagramIcon sx={{ fontSize: '3rem'}} />
            <TwitterIcon sx={{ fontSize: '3rem'}} />
            <GitHubIcon sx={{ fontSize: '3rem'}} />
            <YouTubeIcon sx={{ fontSize: '3rem'}} />
        </Box>

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
