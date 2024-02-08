export interface Project {
    name: string;
    link: string;
    image: string;
    description: string;
}

export const ProjectData: Project[] = [
    {
        name: 'reserve-me',
        link: 'https://reserve-me-de1g.vercel.app/',
        image: './src/assets/reserve-me.png',
        description: 'An Airbnb type reservation system built using MUI'
    },
]