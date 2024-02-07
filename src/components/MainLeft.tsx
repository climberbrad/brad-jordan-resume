import React from "react";
import {Box, Typography} from "@mui/material";
import {FooterLinks} from "./FooterLinks.tsx";
import {useLocation} from "react-router-dom";


const NavItem = ({link, txt, isSelected}: { link: string, txt: string, isSelected: boolean }): React.ReactElement => {
    return (
        <a href={`#${link}`}>
            <Typography fontFamily='arial' fontWeight='bold' fontSize={12} color={isSelected ? 'white': 'inherit'}>
                <hr style={{
                    transitionDelay: '200ms',
                    transition: '200ms',
                    display: 'inline-block',
                    width: isSelected ? 75 : 20,
                    height: 1,
                    marginRight: 12
                }}/>
                {txt.toUpperCase()}
            </Typography></a>
    )
}

export function MainLeft(): React.ReactElement {
    const location = useLocation();

    console.log('hash', location.hash)
    return (
        <>
            <main>
                <Box sx={{display: 'flex', flexDirection: 'column', width: '20rem'}}>
                    <Typography fontWeight='bold' fontSize={52}>Brad Jordan</Typography>
                    <Typography sx={{marginTop: -1}} fontSize={24}>Full stack developer</Typography>
                    <Typography sx={{marginTop: 2}} fontSize={16} color='#8599bc'>
                        TypeScript | React | Java | AWS | GCP
                    </Typography>
                    <Box sx={{marginTop: 12, display: 'flex', flexDirection: 'column', gap: 2}}>
                        <NavItem link='about' txt='about'
                                 isSelected={location.hash === '#about' || location.hash === ''}/>
                        <NavItem link='experience' txt='experience' isSelected={location.hash === '#experience'}/>
                        <NavItem link='projects' txt='projects' isSelected={location.hash === '#projects'}/>
                    </Box>
                    <FooterLinks/>
                </Box>
            </main>
        </>
    )
}