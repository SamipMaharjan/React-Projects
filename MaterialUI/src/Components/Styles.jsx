import { styled, useTheme } from '@mui/system';
import { Paper } from '@mui/material';
import {useTheme} from '@mui/material/styles'

const StyledPaper = styled(Paper, {})({
    color: "#ffffff",
    backgroundColor: "silver", 
    margin: "auto",
    borderRadius: 2,
    height: 300,
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ".MuiButton-root": { color: "#FF0000"},
    backgroundImage: `url("https://picsum.photos/300/300")`
})

const useStyles = () => {
    const theme = useTheme();
  
    return styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    }));
  };



export { useStyles };  