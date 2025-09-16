import {FeaturedCodingData} from "@/components/codingData"
import {CodingHero} from "@/components/reusable/codingHero";
import Languages from "@/components/languages";

export default function FeaturedCoding() {
    return (
        <div>
            {FeaturedCodingData.map((e, i) =>
                <div key={"featured-coding-" + i} className={"mb-16"}>
                    <CodingHero
                        link={e.link}
                        src={e.src}
                        title={e.title}
                        desc={e.desc}
                        languages={e.languages}
                        statNumber={e.statNumber}
                        statDesc={e.statDesc}
                    />
                </div>
            )}
            <div className={'pt-8'}>
                <Languages/>
            </div>
        </div>
    )
}