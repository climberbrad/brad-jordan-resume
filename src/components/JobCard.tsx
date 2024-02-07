import React from "react";
import {Box, CardContent, Chip, Divider, Typography} from "@mui/material";
import {Job} from "./JobData.ts";

export function JobCard({job}: { job: Job }): React.ReactElement {
    return (
        <CardContent sx={{transitionDelay: '20ms', '&:hover': {background: "#112538", border: 0, borderRadius: 2}}}>
            <Box sx={{display: 'flex', gap: 2}}>
                <Typography sx={{whiteSpace: 'noWrap'}} fontWeight='bolder' color='darkgrey' fontSize={14}>
                    {job.startDate} - {job.endDate}
                </Typography>
                <Box>
                    <Typography fontFamily="'Quicksand', sans-serif" fontWeight='bolder' fontSize={18} gutterBottom>
                        {job.company}
                    </Typography>
                    <Typography fontSize={16} gutterBottom>
                        {job.title}
                    </Typography>
                    <Typography fontSize={16} color='#8599bc'>
                        {job.description}
                    </Typography>
                    <Divider sx={{marginY: 1}}/>
                    <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                        {job.skills.map(skill => (
                            <Chip key={skill} sx={{background: '#344257', color: '#75e5d3'}} label={skill}/>
                        ))}

                    </Box>
                </Box>
            </Box>
        </CardContent>
    )
}