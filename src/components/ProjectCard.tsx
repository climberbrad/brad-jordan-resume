import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Project} from "./ProjectData.ts";
import {Link} from "react-router-dom";

export function ProjectCard(project: Project): React.ReactElement {
    return (
        <Card sx={{
            marginY: 4,
            background: '#0f172a',
            '&:hover': {background: "#112538", border: 0, borderRadius: 2}
        }}>
            <CardMedia
                sx={{ padding: "1em 1em 0 1em", objectFit: "contain", height: 140 }}
                // height={140}
                image={project.image}
                title={project.name}
            />
            <CardContent>
                <Typography color='white' gutterBottom variant="h5" component="div">
                    {project.name}
                </Typography>
                <Typography variant="body2" color="white">
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={project.link} target='_blank'>WebSite</Button>
                <Button size="small" component={Link} to={project.codeUrl} target='_blank'>Code</Button>
            </CardActions>
        </Card>
    )
}