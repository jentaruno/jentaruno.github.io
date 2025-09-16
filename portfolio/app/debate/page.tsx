import {SectionHeading} from "@/components/reusable/sectionHeading";
import FeaturedDebate from "@/components/featuredDebate";
import DebateAchievements from "@/components/DebateAchievements";
import DebateWorkshops from "@/components/DebateWorkshops";
import Image from "next/image";

export default function Debate() {

    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-green-100"}>
            <div className={'w-full lg:w-3/4 grid grid-cols-1 divide-y divide-green-200'}>
                <div className={'flex flex-col py-20 space-y-16'}>
                    <div className={'flex flex-col items-center'}>
                        <h1 className={'page-title mb-4'}>
                            Debate
                        </h1>
                        <p>There's nothing quite like 10,000 hours of yapping.</p>
                    </div>
                    <div className={'flex flex-col py-8 items-center space-y-8'}>
                        <SectionHeading text={"Current Work"}/>
                        <div className={'flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center'}>
                            <Image src={'disputandum-logo.png'} alt={'Disputandum Logo'}
                            width={100} height={100}/>
                            <p>My competitive debating journey concluded in 2022.
                                I'm passing the torch by teaching in a debate academy and creating
                                content for {" "}
                                <a href={'https://disputandum.wordpress.com'}
                                className={"text-green-600 transition-colors underline underline-offset-4 hover:decoration-orange-700"}>
                                    Disputandum
                                </a>,
                                a debate organisation I run with my friends. Since the 2022 launch,
                                the blog has amassed over 60,000 views. We publish free articles and hold weekly spars,
                                so take a look if you're into that!</p>
                        </div>
                    </div>
                    <div className={'flex flex-col py-8 items-center space-y-8'}>
                        <SectionHeading text={"Worlds Journey"}/>
                        <FeaturedDebate/>
                    </div>
                    <div className={'flex flex-col py-8 items-center space-y-8'}>
                        <SectionHeading text={"Debate & Judging Awards"}/>
                        <DebateAchievements/>
                    </div>
                    <div className={'flex flex-col py-8 items-center space-y-8'}>
                        <SectionHeading text={"Workshops"}/>
                        <DebateWorkshops/>
                    </div>
                </div>
            </div>
        </div>
    )
}