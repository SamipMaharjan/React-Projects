import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import React from 'react'; 
import { ThemeProvider } from '@emotion/react';
import theme from "./Styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ThemeProvider theme={ theme }>

      <Container maxWidth='xl' sx={{
            background: '#fff'
          }}>
          <Button variant="contained">Text</Button>
      </Container>
    
    </ThemeProvider>
      

      {
        /*
        Appbar
        banner
        promotion
        titlep
        procducts
        footer
        searchbox
        appdrawer
        */
      }
    </>
  );
}

export default App;
