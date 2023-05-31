import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../Images/banner.jpeg";
import { Box, Typography } from "@mui/material";
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
      <Layout>
        <StylesForHome sx={{ backgroundImage: `url(${Banner})` }}>
          <StylesForDescription>
            {/* Styled heading using styled fucntion  */}
            <StylesForHeading>Food Website</StylesForHeading>

            <Typography>Best Food In Nepal</Typography>

            <Link to="/menu">
              <button>ORDER NOW</button>
            </Link>
          </StylesForDescription>
        </StylesForHome>
      </Layout>
    </>
  );
}
