import './App.css'
import {createTheme, Grid, ThemeProvider} from "@mui/material";
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
            <Grid paddingX={{xs: 0, md: 8}} container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                <Grid item xs={12} md={5}>
                    <MainLeft
                        isAboutVisible={isAboutVisible}
                        isExperienceVisible={isExpVisible}
                        isProjectsVisible={isProjectsVisible}/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <MainRight
                        setIsAboutVisible={setAboutVisisble}
                        setIsExpVisible={setExpVisisble}
                        setIsProjectsVisible={setProjectsVisisble}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default App
