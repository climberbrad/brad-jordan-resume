import './App.css'
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {MainLeft} from "./components/MainLeft.tsx";
import {MainRight} from "./components/MainRight.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Karla',
                'cursive',
            ].join(','),
        },
    });

    return (

        <Routes>
            <Route path="*"
                   element={
                       <ThemeProvider theme={theme}>
                           <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 6, marginX: 6}}>
                               <MainLeft/>
                               <MainRight/>
                           </Box>
                       </ThemeProvider>
                   }
            />
        </Routes>

    )
}

export default App
