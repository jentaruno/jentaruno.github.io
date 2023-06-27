import {CodingHero} from "@/components/codingHero";

export default function FeaturedCoding() {
    return (
        <div>
            <div className={'mb-16'}>
                <CodingHero
                    src={'/course-matcher.png'}
                    title={'UBC Course Matcher'}
                    desc={'Social networking app for UBC students'}
                    languages={['React.js', 'Sass', 'Bootstrap']}
                    statNumber={'5,000+'}
                    statDesc={'views in 2 weeks'}
                />
            </div>
            <div className={'mb-16'}>
                <CodingHero
                    src={'/easychair.png'}
                    title={'EasyChair'}
                    desc={'Web app to ease debate judging'}
                    languages={['JavaScript', 'HTML', 'CSS']}
                    statNumber={'3 years'}
                    statDesc={'used in Indonesian Nationals'}
                />
            </div>

            <div className={'mb-16'}>
                <h4>I've worked with</h4>
                JavaScript, TypeScript, HTML, CSS, Java, C#, Dart, MySQL, Python
                React.js, Next.js, Sass, Flutter, SQLite, JUnit
                Unity, WordPress

                [See more]
            </div>

        </div>
    )
}