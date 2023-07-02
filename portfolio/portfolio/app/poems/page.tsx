import PoemBook from "@/components/poemBook";
import Maverick from "@/components/maverick";

export default function Poems() {

    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-white"}>
            <div className={'w-full lg:w-3/4 grid grid-cols-1 divide-y divide-green-200'}>
                <div className={'flex flex-col items-center py-20'}>
                    <p className={'text-8xl font-bold mb-4'}>
                        Poems
                    </p>
                    <p className={'text-green-600'}>
                        Emotions I put down into words when I feel them strongly
                    </p>
                </div>
                <div className={'flex flex-col items-center py-20'}>
                    <h3 className={'text-green-600'}>
                        Flavors from over the years
                    </h3>
                    <PoemBook/>
                </div>
                <div className={'flex flex-col items-center py-20'}>
                    <h3 className={'text-green-600 mb-4'}>
                        The Maverick
                    </h3>
                    <Maverick/>
                </div>
            </div>
        </div>
    )
}