import React from "react";
import {Box, CardContent, Chip, Divider, Grid, Typography} from "@mui/material";
import {Job} from "./JobData.ts";

export function JobCard({job}: { job: Job }): React.ReactElement {
    return (
        <CardContent sx={{transitionDelay: '20ms', '&:hover': {background: "#112538", border: 0, borderRadius: 2}}}>
            <Grid container spacing={0}>
                <Grid item md={2}>
                    <Typography display={{xs: 'none', md: 'block'}} sx={{whiteSpace: 'noWrap'}} color='darkgrey' fontSize={14}>
                        {job.startDate} - {job.endDate}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                    <Typography fontFamily="'Quicksand', sans-serif" fontWeight='bolder' fontSize={18} gutterBottom>
                        {job.company}
                    </Typography>
                    <Typography display={{md: 'none'}} sx={{whiteSpace: 'noWrap'}} color='darkgrey' fontSize={14}>
                        {job.startDate} - {job.endDate}
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
                </Grid>
            </Grid>
        </CardContent>
    )
}