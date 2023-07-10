'use client'

import {ComputerDesktopIcon} from "@heroicons/react/24/solid";
import {TrophyIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Intro() {
    return (
        <div className={'text-left'}>
            <div className={'flex justify-between'}>
                <div className={'w-2/3'}>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{type: "spring", stiffness: 70}}
                    >
                        <p className={'text-8xl font-bold'}>
                            Jen Taruno
                        </p>
                        <h3 className={'mt-3 text-green-600'}>
                            Techie on weekdays,
                            <br/>
                            debater on weekends
                        </h3>
                    </motion.div>
                </div>
                <div className={'w-1/3 flex justify-center items-center align-middle'}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{type: "spring", stiffness: 100, delay: 0.1}}
                    >
                        <Image
                            width={200}
                            height={200}
                            className={'rounded-full'}
                            src={'/profile.jpeg'}
                            alt={'profile'}
                        />
                    </motion.div>
                </div>
            </div>
            <div className={'w-3/4'}>
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 70, delay: 0.2}}
                >
                    <p className={'mt-8'}>
                        Passionate about optimising processes, front-end development, and community projects
                    </p>
                    <div className={'w-full flex justify-between mt-4'}>
                        <div className={'flex flex-row items-center'}>
                            <ComputerDesktopIcon
                                className={'h-8 w-8 mr-2 fill-orange-700'}/>
                            <h5>Full Ride UBC CS</h5>
                        </div>
                        <div className={'flex flex-row items-center'}>
                            <TrophyIcon
                                className={'h-8 w-8 mr-2 fill-orange-700'}/>
                            <h5>Worlds Debate Coach</h5>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}