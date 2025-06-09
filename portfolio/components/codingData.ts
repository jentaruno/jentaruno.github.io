type CodingDataItem = {
    value: string;
    face: string;
    name: string;
    blocks: {
        link?: string;
        src: string;
        title: string;
        desc: string;
        languages: string[];
        statNumber?: string;
        statDesc?: string;
    }[];
}

export const CodingData: CodingDataItem[] =
    [
        {
            value: "A",
            face: "[",
            name: "Web Development",
            blocks: [
                {
                    link: 'https://devpost.com/software/baboon',
                    src: 'baboon.png',
                    title: 'Baboon',
                    desc: 'The world\'s first motion-based programming language',
                    languages: ['Svelte', 'Python', 'OpenCV']
                },
                {
                    link: 'https://devpost.com/software/sherlockify',
                    src: 'sherlockify.png',
                    title: 'Sherlockify',
                    desc: 'Forked Sherlock project, an open source Python script to search a username across social media sites',
                    languages: ['Python', 'Google Cloud', 'Docker', 'React'],
                    statNumber: '200+',
                    statDesc: 'social media sites',
                },
                {
                    link: 'https://www.dyneapp.ca/',
                    src: 'dyne.png',
                    title: 'Dyne',
                    desc: 'Created customizable drag and drop dashboard using React hooks',
                    languages: ['Next.js', 'React.js', 'Chakra UI'],
                    statNumber: '20+',
                    statDesc: 'reusable components',
                },
                {
                    link: 'https://ubc-course-matcher.netlify.app/',
                    src: '/course-matcher.png',
                    title: 'UBC Course Matcher',
                    desc: 'Social networking app for UBC students',
                    languages: ['React.js', 'Sass', 'Bootstrap'],
                    statNumber: '5,000+',
                    statDesc: 'views in 2 weeks',
                },
                {
                    link: 'https://jentaruno.github.io/bp-easy-chair/',
                    src: '/easychair.png',
                    title: 'EasyChair',
                    desc: 'Web app to ease debate judging',
                    languages: ['JavaScript', 'HTML', 'CSS'],
                    statNumber: '3 years',
                    statDesc: 'used in Indonesian Nationals',
                },
            ]
        },
        {
            value: "K",
            face: "]",
            name: "Game Development",
            blocks: [
                {
                    link: 'https://permafrosted.itch.io/mt-stringmore',
                    src: 'mtstringmore.png',
                    title: 'Mt. Stringmore',
                    desc: 'A marshmallow head who can\'t stop running climbs a mountain. A ball of yarn keeps them from going off the rails. ',
                    languages: ['Unity', 'C#', 'Krita'],
                    statNumber: '30+',
                    statDesc: 'playtests run',
                },
                {
                    src: 'instagram-guess-who.png',
                    title: 'Instagram Guess Who',
                    desc: 'Guess who, but it\'s your mutual followers on the board',
                    languages: ['React', 'Vite', 'TailwindCSS']
                },
            ]
        },
        {
            value: "Q",
            face: "{",
            name: "WordPress",
            blocks: [
                {
                    link: 'https://disputandum.wordpress.com',
                    src: '/disputandum.png',
                    title: 'Disputandum',
                    desc: 'Created website for blog teaching debating techniques and social issues',
                    languages: ['WordPress'],
                    statNumber: '1,000+',
                    statDesc: 'views weekly',
                },
                {
                    link: 'https://debating404.com',
                    src: '/debating404.png',
                    title: 'Debating 404',
                    desc: 'Redesigned website and illustrated for landing page',
                    languages: ['WordPress', 'Elementor'],
                    statNumber: '200%',
                    statDesc: 'increased monthly traffic',
                },
            ]
        },
        {
            value: "J",
            face: "}",
            name: "Augmented Reality",
            blocks: [
                {
                    link: 'https://devpost.com/software/ourboard',
                    src: 'ourboard.png',
                    title: 'OurBoard',
                    desc: 'Collaborative AR bulletin board (Best Beginner Hack & Honorable Mention at NWHacks 2024)',
                    languages: ['MongoDB', 'Flask', 'Three.js', 'AR.js'],
                    statNumber: '600+',
                    statDesc: 'hackathon participants',
                },
                {
                    link: 'https://github.com/jentaruno/Obra-Den',
                    src: 'obraden.png',
                    title: 'Obra Den',
                    desc: 'Obra Dinn themed AR escape room',
                    languages: ['C#', 'Unity', 'ARCore'],
                    statNumber: '1',
                    statDesc: 'person made happy on his birthday',
                },
                {
                    src: '/ar-yearbook.png',
                    title: 'AR Yearbook',
                    desc: 'Commissioned app to view custom AR photos and videos on school yearbook',
                    languages: ['C#', 'Unity', 'Vuforia'],
                },
                {
                    src: '/ar-gamelan.png',
                    title: 'AR Gamelan',
                    desc: 'AR app to play traditional Javanese instruments from your home',
                    languages: ['C#', 'Unity', 'Vuforia', 'OpenCV'],
                },
            ]
        }
    ];