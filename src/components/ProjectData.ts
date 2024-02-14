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
    {
        name: 'We the people',
        link: 'https://we-the-people-oh5h.vercel.app/',
        codeUrl: 'https://github.com/climberbrad/we-the-people/',
        image: 'wtp.png',
        description: 'I created a webapp to allow users to create seven day polls. ' +
            'It is just a fun little app so my kids could create a poll to ask what movie they wanted to watch Friday nights. ' +
            'The backend API is Node | Express | MongoDB (MERN stack) and the Frontend is React/TypeScript and MUI.'
    }
]