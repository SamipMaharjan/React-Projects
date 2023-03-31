import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <InstagramIcon/> 
      <TwitterIcon/> 
      <LinkedInIcon/> 
      <FacebookIcon/> 
      <div className='socialMedia'>
          <p> &copy; 2021 pedrotechpizza.com</p>
      </div>
    </div>
  )
}