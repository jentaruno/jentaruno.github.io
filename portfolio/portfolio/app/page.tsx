import PageNavs from '@/components/pageNavs'
import Intro from "@/components/intro";
import FeaturedCoding from "@/components/featuredCoding";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-24 py-8 bg-white">
            <PageNavs/>
            <div className={'grid grid-cols-1 divide-y divide-grey'}>
                <div className={'flex flex-col min-h-screen justify-center items-center align-middle'}>
                    <Intro/>
                </div>
                <div className={'flex flex-col items-center py-20'}>
                    <h1>I code with community in mind</h1>
                    <div className={'my-16'}>
                        <FeaturedCoding/>
                    </div>
                </div>
            </div>
        </main>
    )
}
