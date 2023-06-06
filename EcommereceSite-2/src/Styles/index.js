import { createTheme } from '@mui/material/styles'

const Colors = {
    primary: "#00adb5",
    secondary: "#95defb",
    success: "#4caf5o",
    info: "#00a2ff",
    danger: "#ff5722",
    warning: "#ffc107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#aba5b3",
    border: "#ddofe1",
    inverse: "#2f3d4a",
    shaft: "#333",
    dove_gray: "d5d5d5",
    body_bg: "f3f6f9",
    white: "#fff",
    black: "#000"
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },

    components: {
        MuiButton: {
            defaultProps:{
                disableRipple: true,
                disableElevation: true
            }
        }
    }
   
});

export default theme; 