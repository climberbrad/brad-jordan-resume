export interface Project {
    name: string;
    link: string;
    codeUrl: string;
    image: string;
    description: string;
}

export const ProjectData: Project[] = [
    {
        name: 'Weekends',
        link: 'https://reserve-me-de1g.vercel.app/',
        codeUrl: 'https://github.com/climberbrad/reserve-me',
        image: 'reserve-me.png',
        description: 'This is an Airbnb style website that I built in TypeScript and MUI.' +
            'You can reserve an accommodation and it appears in MyTrips. It was just fun to build' +
            'a simple reservation system and play around with some of the MUI components.'
    },
]