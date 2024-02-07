import React from "react";
import {Box, Typography} from "@mui/material";
import {FooterLinks} from "./FooterLinks.tsx";


const NavItem = ({link, txt, isSelected}: { link: string, txt: string, isSelected: boolean }): React.ReactElement => {
    return (
        <a href={`#${link}`}>
            <hr style={{
                position: 'relative',
                top: 6,
                paddingTop: 1,
                marginTop: 4,
                transition: '150ms',
                display: 'inline-block',
                width: isSelected ? 75 : 30,
                height: 1,
                marginRight: 18,
                color: isSelected ? 'white': '',
            }}/>
            <Typography sx={{display: 'inline'}} fontFamily='arial' fontWeight='bold' fontSize={12}
                        color={isSelected ? 'white' : 'inherit'}>
                {txt.toUpperCase()}
            </Typography></a>
    )
}

interface MainLeftProps {
    isAboutVisible: boolean;
    isExperienceVisible: boolean;
    isProjectsVisible: boolean;
}

export function MainLeft(props: MainLeftProps): React.ReactElement {

    return (
        <>
            <main>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography fontWeight='bold' fontSize={52}>Brad Jordan</Typography>
                    <Typography sx={{marginTop: -1}} fontSize={24}>Full stack developer</Typography>
                    <Typography sx={{marginTop: 2}} fontSize={16} color='#8599bc'>
                        TypeScript | React | Java | AWS | GCP
                    </Typography>
                    <Box sx={{marginTop: '15vh', display: 'flex', flexDirection: 'column', gap: 2}}>
                        <NavItem link='about' txt='about'
                                 isSelected={props.isAboutVisible && !props.isExperienceVisible}/>
                        <NavItem link='experience' txt='experience'
                                 isSelected={props.isExperienceVisible
                                     && (!props.isAboutVisible || !props.isProjectsVisible) }/>
                        <NavItem link='projects' txt='projects'
                                 isSelected={props.isProjectsVisible && !props.isExperienceVisible}/>
                    </Box>
                    <FooterLinks/>
                </Box>
            </main>
        </>
    )
}