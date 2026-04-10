import quickitaPic from './quickita.jpg';
import birdiePic from './birdie.jpg';
import intertwinePic from './intertwine.jpg';
import floodguardPic from './floodguard.jpg';

const articles = [
    {
        name: "quickita",
        title: "QuicKita",
        label: "Web Platform",
        desc: "A local job-seeking platform inspired by LinkedIn and JobStreet. Designed to connect applicants with small businesses for jobs not requiring extensive qualifications.",
        content: [
            "QuicKita is a local job-seeking platform inspired by LinkedIn and JobStreet.",
            "It was carefully designed to connect applicants with small businesses for jobs that do not require extensive qualifications.",
            "Through this platform, users can quickly find jobs in their immediate vicinity, making employment more accessible to everyone."
        ],
        image: quickitaPic
    },
    {
        name: "how-to-train-your-birdie",
        title: "How to Train Your Birdie",
        label: "Game Development",
        desc: "A three-round pixel shooting game. Play as a bird fending off land, water, and aerial predators to help your flock safely migrate.",
        content: [
            "How to Train Your Birdie is an action-packed, three-round pixel shooting game.",
            "Players take on the role of a courageous bird tasked with fending off land, water, and aerial predators.",
            "The ultimate goal is to survive all three rounds and help your flock safely migrate to their new home."
        ],
        image: birdiePic
    },
    {
        name: "intertwine",
        title: "Intertwine",
        label: "Flutter & JavaScript",
        desc: "A social media networking application functioning similarly to Facebook, connecting users through seamless real-time interactions.",
        content: [
            "Intertwine is a robust social media networking application built with Flutter and JavaScript.",
            "Functioning similarly to Facebook, it connects users through seamless real-time interactions, posts, and messaging.",
            "This project demonstrates my ability to integrate front-end mobile frameworks with dynamic back-end services."
        ],
        image: intertwinePic
    },
    {
        name: "floodguard",
        title: "FloodGuard",
        label: "Current Development",
        desc: "An ongoing prototype system focused on flood monitoring and early warning alerts to keep local communities safe and prepared.",
        content: [
            "FloodGuard is currently in active development as a prototype system.",
            "It is deeply focused on flood monitoring and providing early warning alerts.",
            "By leveraging predictive flood mapping, it aims to keep local communities safe, informed, and well-prepared for any possible flooding events."
        ],
        image: floodguardPic
    }
];

export default articles;