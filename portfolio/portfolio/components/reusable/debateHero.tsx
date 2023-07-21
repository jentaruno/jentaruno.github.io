'use client'

import Image from "next/image";
import {motion} from "framer-motion";

export function DebateHero(props: { year: number, title: string, desc: string, src: string, otherText: string, strings: string[], }) {
    return <div>
        <div className={"flex flex-col md:flex-row justify-center gap-4"}>
            <motion.div
                className={"flex flex-col md:w-1/3 md:mr-4 justify-center"}
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{type: "spring", stiffness: 100, delay: 0.2}}
            >
                <h1 className={"font-bold mb-4"}>{props.title}</h1>
                <p className={'text-green-600'}>{props.desc}</p>
            </motion.div>
            <div className={'md:w-1/3 flex flex-row justify-center'}>
                <motion.div
                    className={'w-2/3 md:w-full bg-white justify-center rounded-md drop-shadow-md'}
                    initial={{opacity: 0, y: -50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
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
                className={"flex flex-col md:w-1/3 md:ml-4 justify-center"}
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{type: "spring", stiffness: 100, delay: 0.2}}
            >
                <span className={"uppercase text-sm text-orange-700 font-bold tracking-widest mb-2"}>
                    {props.otherText}
                </span>
                <ul className={"list-disc list-outside ml-4"}>
                    {props.strings.map((e, i) =>
                        <li key={`award-${i}`}>
                            {e}
                        </li>)}
                </ul>
            </motion.div>
        </div>
    </div>;
}