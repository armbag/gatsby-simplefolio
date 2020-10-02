import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Armen bagramian', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello there I'm",
  name: 'Armen Bagramian',
  subtitle: 'Until Alina finds better',
  cta: 'Curious?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm Armen Bagramian, fullstack developer, willing to code your next project!",
  paragraphTwo:
    'My stack includes rails, node, graphql for the backend, and react, gatsby, and Next for the front-end',
  paragraphThree: 'Woodworking & cooking lover!',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'TransportCompare',
    info: 'Electron app, used to compare two transport companies together.',
    info2: 'Electron + React',
    url: '',
    repo: 'https://github.com/armbag/transport-compare', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sick.png',
    title: 'Sick Fits',
    info: 'Clothes marketplace with authentication, permissions, CRUD and love',
    info2: `frontend: NextJS, ApolloClient
    backend: ApolloServer, Graphql, express, deployed on Heroku`,
    url: 'https://new-51ck-next.herokuapp.com/',
    repo: 'https://github.com/armbag/React-GraphQL', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Wanna work with me?',
  btn: 'Send me an email',
  email: 'armen.bagramian@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/armen-bagramian/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/armbag',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
