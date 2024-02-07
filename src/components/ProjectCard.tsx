import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Project} from "./ProjectData.ts";

export function ProjectCard(project: Project) : React.ReactElement {
    return (
        // <Card sx={{ marginY: 4, background: '#0f172a', '&:hover': {background: "#112538", border: 0, borderRadius: 2}}}>
        <Card sx={{ marginY: 4, background: '#0f172a', '&:hover': {background: "#112538", border: 0, borderRadius: 2}}}>
            <CardMedia
                sx={{ height: 140 }}
                image={project.image}
                title={project.name}
            />
            <CardContent>
                <Typography color='white' gutterBottom variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}