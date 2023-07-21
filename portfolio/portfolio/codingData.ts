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
            name: "Mobile App Development",
            blocks: [
                {
                    link: 'https://github.com/jentaruno/taskwatch',
                    src: '/taskwatch.jpg',
                    title: 'TaskWatch',
                    desc: 'Cross platform productivity app to record and optimise time for completing tasks',
                    languages: ['Flutter', 'Dart', 'SQLite'],
                },
            ]
        },
        {
            value: "Q",
            face: "{",
            name: "WordPress",
            blocks: [
                {
                    link: 'https://disputandum.com',
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