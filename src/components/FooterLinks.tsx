import React from "react";
import {Box, IconButton} from "@mui/material";
import {FaGithub, FaMedium, FaXTwitter, FaLinkedin} from "react-icons/fa6";


const HoverIcon = ({children}: { children: React.ReactElement }): React.ReactElement => {
    return (
        <IconButton size='large' sx={{color: '#8599bc', "&:hover ": {color: '#efefef'}}}>
            {children}
        </IconButton>
    )
}

export function FooterLinks(): React.ReactElement {
    return (
        <footer style={{position: 'absolute', left: 100, bottom: 50}}>
            <Box sx={{display: 'flex', gap: 1}}>
                <a href='https://www.linkedin.com/in/boulderbrad/' target="_blank"><HoverIcon><FaLinkedin/></HoverIcon></a>
                <a href='https://github.com/climberbrad' target='_blank'><HoverIcon><FaGithub/></HoverIcon></a>
                <a href='https://medium.com/@climberbrad' target='_blank'><HoverIcon><FaMedium/></HoverIcon></a>
                <a href='https://twitter.com/climberbrad' target='_blank'><HoverIcon><FaXTwitter/></HoverIcon></a>
            </Box>
        </footer>
    )
}