import React, {useEffect, useMemo, useRef} from "react";
import {Box, Divider, Grid, Typography} from "@mui/material";
import {JobCard} from "./JobCard.tsx";
import {jobData} from "./JobData.ts";
import {ProjectData} from "./ProjectData.ts";
import {ProjectCard} from "./ProjectCard.tsx";

interface MainRightProps {
    setIsAboutVisible: (isVisible: boolean) => void;
    setIsExpVisible: (isVisible: boolean) => void;
    setIsProjectsVisible: (isVisible: boolean) => void;
}


export function MainRight(props: MainRightProps): React.ReactElement {
    const aboutRef = useRef();
    const expereinceRef = useRef();
    const projectsRef = useRef();

    const aboutObserver = useMemo(() => new IntersectionObserver(
        ([entry]) => props.setIsAboutVisible(entry.isIntersecting)
    ), [aboutRef])

    const expObserver = useMemo(() => new IntersectionObserver(
        ([entry]) => props.setIsExpVisible(entry.isIntersecting)
    ), [expereinceRef])

    const projectsObserver = useMemo(() => new IntersectionObserver(
        ([entry]) => props.setIsProjectsVisible(entry.isIntersecting)
    ), [projectsRef])


    useEffect(() => {
        aboutObserver.observe(aboutRef.current || new Element())
        return () => aboutObserver.disconnect()
    }, [])

    useEffect(() => {
        expObserver.observe(expereinceRef.current || new Element())
        return () => expObserver.disconnect()
    }, [])

    useEffect(() => {
        projectsObserver.observe(projectsRef.current || new Element())
        return () => projectsObserver.disconnect()
    }, [])


    return (
        <Grid container spacing={2}
              overflow={{xs: 'none', md: 'auto'}}
              sx={{
                  gap: 2,
                  maxHeight: '100vh',
                  scrollBehavior: 'smooth',
                  scrollbarWidth: "none", // Hide the scrollbar for firefox
                  '&::-webkit-scrollbar': {
                      display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
                  },
                  '&-ms-overflow-style:': {
                      display: 'none', // Hide the scrollbar for IE
                  }
              }}
        >
            <Grid item xs={12}>
                <Box id='about' ref={aboutRef} sx={{marginTop: 2}}>
                    <Typography fontSize={18} color='#8599bc'>
                        Back in 2008 I joined a startup in Boulder, Colorado. They had recently
                        graduated from
                        <Typography color="#ffffff" fontSize={18} variant="caption"> Techstars </Typography>
                        and were looking to build their POC into a fully functioning Sass product.
                        I was employee number five and that began my journey into the world of startups
                        and building highly scalable, highly available applications leveraging the latest technologies.
                        We learned to build quickly and efficiently using the latest solutions at that time like
                        EC2, RDS, S3, HBase, Hadoop and Elasticsearch.
                    </Typography>
                    <Divider sx={{marginY: 1}}/>
                    <Typography fontSize={18} color='#8599bc'>
                        The friends I made there worked together through a number of other startups, building solutions
                        that scale and applications for a number of B2B spaces. My experience
                        generally trended towards the backend Java ecosystem leveraging
                        <Typography color="#ffffff" fontSize={18} variant="caption"> AWS </Typography>
                        and <Typography color="#ffffff" fontSize={18} variant="caption"> GCP </Typography>
                        as platforms. Most recently, I have transitioned into a role of pure Frontend work using
                        TypeScript
                        and React. The creativity of building intuitive and elegant UIs has been a welcome change.
                    </Typography>

                    <Divider sx={{marginY: 1}}/>

                    <Typography fontSize={18} color='#8599bc'>
                        I love working in collaborative environments where we learn from each other and
                        are passionate about the products we build. I also love to mentor, bringing fresh ideas to the
                        team.
                    </Typography>
                </Box>
            </Grid>

            <Divider sx={{marginY: 2}}/>

            <Grid item xs={12}>
                <Box id='experience' ref={expereinceRef}>
                    {jobData.map(job => <JobCard key={job.company} job={job}/>)}
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box id='projects' ref={projectsRef}>
                    {ProjectData.map(project => <ProjectCard key={project.name} {...project} />)}
                </Box>
            </Grid>
        </Grid>
    )
}