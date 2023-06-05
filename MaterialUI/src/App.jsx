import { useState } from 'react'
import { Container, Paper, Input, Button, styled  } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Styles/styles';


function App() {
  const myButton = styled( Button )({


  });

  const RoundedButton = styled( myButton )({
    borderRadius: '23px'
  });
  
  return (
    <>
    <ThemeProvider theme={theme} >
      <Container maxWidth='xs'>
          <Paper sx={{
            padding: '1rem'
          }}>
              <Input fullWidth placeholder='first name'></Input>
              <Input fullWidth placeholder='last name'></Input>
              <Input fullWidth placeholder='email'></Input>
              <Input fullWidth placeholder='website'></Input>
              <Button sx={{ margin: '10px'}} variant='contained'>SUBMIT</Button>

              <RoundedButton color='secondary' sx={{ margin: '10px'}} variant='contained'>SUBMIT</RoundedButton>

          </Paper>
      </Container>
    </ThemeProvider>
      
    </>
  )
}

export default App;
