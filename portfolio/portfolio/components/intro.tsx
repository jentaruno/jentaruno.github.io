import {ComputerDesktopIcon} from "@heroicons/react/24/solid";
import {TrophyIcon} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Intro() {
    return (
        <div className={'text-left'}>
            <div className={'flex justify-between'}>
                <div className={'w-2/3'}>
                    <p className={'text-8xl font-bold'}>
                        Jen Taruno
                    </p>
                    <h3 className={'mt-3'}>
                        Techie on weekdays,
                        <br/>
                        debater on weekends
                    </h3>
                </div>
                <div className={'w-1/3 flex justify-center items-center align-middle'}>
                    <Image
                        width={200}
                        height={200}
                        className={'rounded-full'}
                        src={'/profile.jpeg'}
                        alt={'profile'}
                    />
                </div>
            </div>
            <div className={'w-2/3'}>
                <p className={'text-green-600 mt-8'}>
                    Passionate about optimising processes, front-end development, and community projects
                </p>
                <div className={'w-full flex justify-between mt-4'}>
                    <div className={'flex flex-row items-center'}>
                        <ComputerDesktopIcon
                            className={'h-8 w-8 mr-2 fill-orange'}/>
                        <h5>Full Ride UBC CS</h5>
                    </div>
                    <div className={'flex flex-row items-center'}>
                        <TrophyIcon
                            className={'h-8 w-8 mr-2 fill-orange'}/>
                        <h5>Worlds Debate Coach</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}