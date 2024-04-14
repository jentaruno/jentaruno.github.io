import {SectionHeading} from "@/components/reusable/sectionHeading";
import FeaturedDebate from "@/components/featuredDebate";
import DebateAchievements from "@/components/DebateAchievements";

export default function Debate() {

    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-green-100"}>
            <div className={'w-full lg:w-3/4 grid grid-cols-1 divide-y divide-green-200'}>
                <div className={'flex flex-col py-20 space-y-16'}>
                    <div className={'flex flex-col items-center'}>
                        <p className={'text-8xl font-bold mb-4'}>
                            Debate
                        </p>
                    </div>
                    <div className={'flex flex-col py-8 items-center space-y-8'}>
                        <SectionHeading text={"Worlds Journey"}/>
                        <FeaturedDebate/>
                    </div>
                    <div className={'flex flex-col py-8 items-center space-y-8'}>
                        <SectionHeading text={"Debate & Judging Awards"}/>
                        <DebateAchievements/>
                    </div>
                </div>
            </div>
        </div>
    )
}