import {CodingHero} from "@/components/reusable/codingHero";

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

            <div className={'pt-8'}>
                <h4 className={'text-green-600'}>I've worked with</h4>
                <h3 className={'font-bold text-justify leading-normal [word-spacing:1rem]'}>
                    JavaScript
                    TypeScript
                    HTML
                    CSS
                    Java
                    C#
                    Dart
                    MySQL
                    Python
                    React.js
                    Next.js
                    TailwindCSS
                    Sass
                    Flutter
                    SQLite
                    JUnit
                    Unity
                    WordPress
                </h3>
            </div>

        </div>
    )
}