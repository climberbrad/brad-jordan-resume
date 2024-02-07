import React from "react";
import {Box, Divider, Typography} from "@mui/material";
import {JobCard} from "./JobCard.tsx";
import {jobData} from "./JobData.ts";
import {ProjectData} from "./ProjectData.ts";
import {ProjectCard} from "./ProjectCard.tsx";


export function MainRight(): React.ReactElement {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '35rem',
                gap: 2,
                maxHeight: 650,
                overflow: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: "none", // Hide the scrollbar for firefox
                '&::-webkit-scrollbar': {
                    display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
                },
                '&-ms-overflow-style:': {
                    display: 'none', // Hide the scrollbar for IE
                }
            }}>
            <Box id='about'>
                <Typography fontSize={18} color='#8599bc'>
                    Back in 2008 I joined a startup in Boulder, Colorado. They had recently
                    graduated from <Typography display='inline' color='white'>Techstars </Typography>
                    and were looking to build their POC into a fully functioning Sass product.
                    I was employee number five and that began my journey into the world of startups
                    and building highly scalable, highly available applications leveraging the latest technologies.
                    We learned to build quickly and efficiently using the latest solutions at that time like
                    EC2, RDS, S3, HBase, Hadoop and Elasticsearch.
                </Typography>
                <Typography fontSize={18} color='#8599bc'>
                    The friends I made there worked together through a number of other startups, building solutions
                    that scale and applications for a number of B2B spaces. My experience
                    generally trended towards the backend Java ecosystem leveraging <Typography display='inline' color='white'>AWS and GCP </Typography>
                    as platforms. Most recently, I have transitioned into a role of pure Frontend work using TypeScript
                    and React. The creativity of building intuitive and elegant UIs has been a welcome change.
                </Typography>
                <Typography fontSize={18} color='#8599bc'>
                    I love working in collaborative environments where we learn from each other and
                    are passionate about the products we are building.
                </Typography>
            </Box>
            <Divider sx={{marginY: 4}}/>
            <Box id='experience'>
                {jobData.map(job => <JobCard key={job.company} job={job}/>)}
            </Box>
            <Box id='projects'>
                {ProjectData.map(project => <ProjectCard {...project} />)}
            </Box>
        </Box>
    )
}