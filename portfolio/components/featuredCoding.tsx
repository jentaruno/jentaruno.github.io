import {CodingHero} from "@/components/reusable/codingHero";
import Languages from "@/components/languages";

export default function FeaturedCoding() {

    return (
        <div>
            <div className={'mb-16'}>
                <CodingHero
                    link={'https://ubc-course-matcher.netlify.app/'}
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
                    link={'https://jentaruno.github.io/bp-easy-chair/'}
                    src={'/easychair.png'}
                    title={'EasyChair'}
                    desc={'Web app to ease debate judging'}
                    languages={['JavaScript', 'HTML', 'CSS']}
                    statNumber={'3 years'}
                    statDesc={'used in Indonesian Nationals'}
                />
            </div>

            <div className={'pt-8'}>
                <Languages/>
            </div>

        </div>
    )
}