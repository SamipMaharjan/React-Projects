import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Images/banner.jpeg";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

export default function Home() {
  const StylesForHome = styled( Box )({
    height: '45vw', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'left',
    flexDirection: 'column',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' 
  });

  const StylesForHeading = styled.h1`
  justify-content: center; 
  align-items: center; 
  font-weight: bold;
  font-size: 70px;
  color: black;
`;
  const StylesForDescription = styled( Box )({
      marginLeft: '5vw',
  });
  return (
  
    <>
      
        <StylesForHome sx={{ backgroundImage: `url(${Banner})` }}>
          <StylesForDescription>
            {/* Styled heading using styled fucntion  */}
            <StylesForHeading>Food Website</StylesForHeading>

            <Typography>Best Food In Nepal</Typography>

            <Button variant="contained" color="success" component = {Link} to='/menu'>
              ORDER NOW
            </Button>
          </StylesForDescription>
        </StylesForHome>
      
    </>
  );
}
