import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography, Button, AppBar,  Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import makeStyles from '@mui/material';
//Creating a hook useStyles that stores function makeStyles. 
const useStyles = makeStyles( ( theme ) => ({

}))

function App() {
  const classes = useStyles();

  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline/>
      {/* Overrides the default Css codes to reset the Baseline of this component to promote browser consistency.  */}
       <AppBar position="relative">
            <Toolbar>
              <PhotoCameraIcon />
              <Typography variant="h6">Samip Maharjan</Typography>
            </Toolbar>
       </AppBar>

        <main>
          <div>
            <Container maxWidth="sm">

              <Typography variant = "h2" align="center" color="textSecondary">
                Photo Album
              </Typography>
              
              <Typography variant="h6" align="center" color="red" paragraph >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas inventore esse dolor libero nihil quam ab debitis voluptatum. Optio itaque tempore aperiam quibusdam error dolore quam exercitationem? Deleniti sit, blanditiis 
                
                illo quaerat autem minima unde harum eos expedita temporibus deserunt? Reprehenderit nihil error molestiae deserunt quos quam officia, autem sed.
              </Typography>

              <div>

                {/* A grid component which is basically like CSS grids? */}
                <Grid container spacing = {10} justify="center" flexDirection={"column"} >
                  
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See My photos
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      See My photos
                    </Button>
                  </Grid>

                </Grid>
              </div>
            </Container>
          </div>

          
        </main>
    </>
  )
}

export default App
