'use client'

import Image from "next/image";
import {motion} from "framer-motion";

export function DebateHero(props: { year: number, title: string, desc: string, src: string, otherText: string, strings: string[], }) {
    return <div>
        <div className={"flex flex-col lg:flex-row justify-center"}>
            <motion.div
                className={"flex flex-col lg:w-1/3 lg:mr-8 justify-center"}
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{type: "spring", stiffness: 100, delay: 0.2}}
            >
                <h1 className={"font-bold mb-4"}>{props.title}</h1>
                <p className={'text-green-600'}>{props.desc}</p>
            </motion.div>
            <div className={'lg:w-1/3 bg-white flex flex-col justify-center rounded-md drop-shadow-md'}>
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, delay: 0.1}}
                >
                    <div className={"text-center text-green-600 font-bold tracking-wider"}>
                        {props.year}
                    </div>
                    <div className={"relative mx-2 mb-4 h-64"}>
                        <Image
                            fill={true}
                            src={props.src}
                            alt={props.title}
                            style={{objectFit: "cover"}}
                        />
                    </div>
                </motion.div>
            </div>
            <motion.div
                className={"flex flex-col lg:w-1/3 lg:ml-8 justify-center"}
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{type: "spring", stiffness: 100, delay: 0.2}}
            >
                <span className={"uppercase text-sm text-orange-700 font-bold tracking-widest mb-2"}>
                    {props.otherText}
                </span>
                <ul className={"list-disc list-outside ml-4"}>
                    {props.strings.map(e =>
                        <li>
                            {e}
                        </li>)}
                </ul>
            </motion.div>
        </div>
    </div>;
}