'use client'

import {ComputerDesktopIcon} from "@heroicons/react/24/solid";
import {TrophyIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Intro() {
    return (
        <div className={'text-left'}>
            <div className={'flex flex-col md:flex-row justify-between items-center gap-6'}>
                <div className={'w-full flex justify-center items-start md:items-center my-4'}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{type: "spring", stiffness: 100, delay: 0.1}}
                    >
                        <Image
                            width={440}
                            height={480}
                            src={'/jen-no-bg.png'}
                            alt={'profile'}
                        />
                    </motion.div>
                </div>
                <div className={'w-full'}>
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
                        <div className={"mt-4 "}>
                            <div className={'flex flex-row items-center mr-8'}>
                                <ComputerDesktopIcon
                                    className={'h-7 w-7 mr-2 fill-orange-700'}/>
                                <h5>Prev. SWE Intern @ Asana & EA</h5>
                            </div>
                            <div className={'flex flex-row items-center'}>
                                <TrophyIcon
                                    className={'h-7 w-7 mr-2 fill-orange-700'}/>
                                <h5>World Schools Debate Coach</h5>
                            </div>
                            <p className={'mt-4 text-green-900'}>
                                I also make video games and crosswords :)
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}