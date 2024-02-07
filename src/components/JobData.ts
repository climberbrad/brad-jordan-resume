export interface Job {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    skills: string[];
}

export const jobData: Job[] = [
    {
        company: 'Endgame',
        title: 'Senior Software Engineer',
        startDate: '2021',
        endDate: '2023',
        description: 'Endgame was positioned to change how sales teams found qualified leads. ' +
            'As the 8th member of the company I wore a lot of hats. I always stayed close to the frontend ' +
            'and customer interactions and was able to ramp up quickly on React and Typescript to become an effective UI dev. ' +
            'In the beginning I was interacting with our design partners, listening to their pain points along with one of our co-founders. ' +
            'In addition to building UI features, I helped to map customer data to our models by pouring through BigQuery to find relevant event data. ' +
            'As the vision became more defined I was able to focus entirely on the UI stack building features, implementing testing frameworks, creating design patterns.',
        skills: ['TypeScript','JavaScript', 'React', 'GO', 'BigQuery', 'Firestore', 'Figma', 'MUI', 'Tailwind', 'Playwright', 'Cypress']

    },
    {
        company: 'Cloudability',
        title: 'Engineering Manager',
        startDate: '2015',
        endDate: '2021',
        description: 'I was one of three individuals who started the Cloudability Boulder office. ' +
            'They are a Portland based company looking for a Boulder presence. I worked as a Java engineer ' +
            'building several features around cost optimization in AWS. Our product was touted ' +
            'by AWS as a better recommendation engine than their own. The three of us worked together on this ' +
            'engine as well as building the office by hiring new people, finding office space, and all other things. ' +
            'As the office grew I became a manager of my own team working on several cost optimization features. ' +
            'Most of these features leveraged a similar architecture using a data ingest service to populate MySQL ' +
            'and served up recommendations from a Java REST API. I continued to code while also defining road maps, ' +
            'engaging with customers around new features and running my team. I have extensive AWS experience building ' +
            'robust data pipelines, RESTful Java microservices and tooling.',
        skills: ['Java','AWS', 'RDS', 'SQS', 'REST', 'MySQL', 'Python', 'Lambda']
    },
    {
        company: 'Jive',
        title: 'Staff Engineer',
        startDate: '2010',
        endDate: '2015',
        description: 'I joined Jive in 2010 as part of their Filtrbox acquisition. Upon joining, we updated our backend pipeline ' +
            'to leverage Flume/HBase/Lucene which enable us to scale our ingest pipeline to ~5k messages/sec from ~500 messages/sec. ' +
            'The development team was part of every aspect of the software: hosting, production issues, customer support, QA and ops. ' +
            'I built our alerting solution which texted the oncall dev if ingest rates slowed, boxes became unresponsive, queues backed up ' +
            'or query times dropped below thresholds (tracer bullet). This alerting system was our main defense against production issues ' +
            'for 4 years and was able to detect problems before they became real fires.\n' +
            'I transitioned to the analytics team in 2013 where I helped define architecture, run scrums, create epics and tasks in Jira, ' +
            'as well as coded features. We leverage Kafka, Elasticsearch and Hadoop to deliver a custom data export service via REST. ' +
            'Upon reaching our initial scaling limitations I created a POC strategy for sharding our ES indexes which allowed us to scale ' +
            '100x our initial limitations and migrate our large customers into ES.',
        skills: ['Java','Elasticsearch', 'Hadoop', 'HBase', 'Flume', 'Casandra', 'MySQL', 'RabbitMQ', 'Spring', 'Guice']
    }

]