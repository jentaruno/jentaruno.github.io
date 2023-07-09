import Intro from "@/components/intro";
import FeaturedCoding from "@/components/featuredCoding";
import FeaturedDebate from "@/components/featuredDebate";
import {SeeMoreButton} from "@/components/reusable/seeMoreButton";
import FeaturedDesign from "@/components/featuredDesign";

export default function Home() {
    return (
        <main className={'flex flex-col bg-white'}>
            <div className="flex flex-col items-center px-8 lg:px-20 py-4 bg-white">
                <div className={'w-full lg:w-3/4 grid grid-cols-1 divide-y divide-green-200'}>
                    <div className={'flex flex-col min-h-screen justify-center'}>
                        <Intro/>
                    </div>
                    <div className={'flex flex-col py-20'}>
                        <h3 className={'text-green-600 text-center'}>
                            I code with community in mind
                        </h3>
                        <div className={'mt-16'}>
                            <FeaturedCoding/>
                            <div className={'mt-12'}>
                                <SeeMoreButton link={'https://github.com/jentaruno'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col py-20'}>
                        <h3 className={'text-green-600 text-center'}>
                            Debate taught me to communicate ideas effectively
                        </h3>
                        <div className={'mt-16'}>
                            <FeaturedDebate/>
                            <div className={'mt-12'}>
                                <SeeMoreButton link={'https://disputandum.com/'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col py-20'}>
                        <h3 className={'text-green-600 text-center'}>
                            Let's put an end to bad design
                        </h3>
                        <div className={'mt-16'}>
                            <FeaturedDesign/>
                            <div className={'mt-12'}>
                                <SeeMoreButton link={'https://www.instagram.com/jentaruno/'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
