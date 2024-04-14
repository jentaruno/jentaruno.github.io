'use client'

import {ComputerDesktopIcon} from "@heroicons/react/24/solid";
import {TrophyIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Intro() {
    return (
        <div className={'text-left'}>
            <div className={'flex flex-col md:flex-row justify-between items-center'}>
                <div className={'w-full md:w-1/3 flex justify-center items-start md:items-center mb-4'}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
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
                <div className={'w-full md:w-2/3'}>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{type: "spring", stiffness: 70}}
                    >
                        <p className={'text-green-900'}>
                            Hi, I'm Jen
                        </p>
                        <h1 className={'font-bold'}>
                            Techie on weekdays, <br/>
                            debater on weekends
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{type: "spring", stiffness: 70, delay: 0.2}}
                    >
                        <p className={'mt-8 text-green-900'}>
                            Passionate about optimising processes, front-end development, and community projects
                        </p>
                        <div className={'w-full flex flex-wrap justify-start mt-4 mb-16 md:mb-0'}>
                            <div className={'flex flex-row items-center mr-8'}>
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
        </div>
    )
}