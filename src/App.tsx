import './App.css'
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {MainLeft} from "./components/MainLeft.tsx";
import {MainRight} from "./components/MainRight.tsx";
import {useState} from "react";

function App() {

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Karla',
                'cursive',
            ].join(','),
        },
    });

    const [isAboutVisible, setAboutVisisble] = useState(false)
    const [isExpVisible, setExpVisisble] = useState(false)
    const [isProjectsVisible, setProjectsVisisble] = useState(false)

    // todo: [ ] useSignal

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <MainLeft isAboutVisible={isAboutVisible} isExperienceVisible={isExpVisible} isProjectsVisible={isProjectsVisible}/>
                <MainRight setIsAboutVisible={setAboutVisisble} setIsExpVisible={setExpVisisble} setIsProjectsVisible={setProjectsVisisble}/>
            </Box>
        </ThemeProvider>
    )
}

export default App
