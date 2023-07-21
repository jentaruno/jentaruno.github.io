'use client'

import Image from "next/image";
import {motion} from "framer-motion";

export function CodingHero(props: {
    link?: string,
    src: string,
    title: string,
    desc: string,
    languages: string[],
    statNumber?: string,
    statDesc?: string
}) {

    const elems = [
        <a
            href={props.link}
            target={'blank'}
        >
            <h2 className={"text-orange-700 font-bold"}>
                {props.title}
            </h2>
        </a>,
        <p className={"mt-2"}>
            {props.desc}
        </p>,
        <ul className="flex flex-row flex-wrap text-green-600">
            {props.languages.map(e =>
                <li className={'text-sm bg-green-200 py-1 px-3 rounded-full mt-2 mr-2 uppercase'}>
                    {e}
                </li>)}
        </ul>,
        <div className={"w-full flex justify-between mt-4"}>
            <div>
                <h2 className={"font-bold"}>
                    {props.statNumber}
                </h2>
                <p className={'text-green-600'}>{props.statDesc}</p>
            </div>
        </div>
    ]
    return <div className={"flex flex-col lg:flex-row"}>
        <motion.div
            className={"relative h-64 lg:w-1/2 flex flex-col justify-center lg:mr-8"}
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{type: "spring", stiffness: 70, delay: 0.2}}
            whileHover={props.link
                ? {
                    scale: 1.03,
                    y: -5,
                    transition: {duration: 0.2},
                }
                : {}}
        >
            <a href={props.link} target={'blank'}>
                <Image
                    fill={true}
                    className={"rounded-xl drop-shadow-md"}
                    src={props.src}
                    alt={props.title}
                    style={{objectFit: "cover"}}
                />
            </a>
        </motion.div>
        <div className={"flex flex-col lg:w-1/2 lg:ml-8 justify-center"}>
            {elems.map((e, i) =>
                <motion.span
                    key={`codingElem-${i}`}
                    initial={{opacity: 0, scale: 0.95}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{type: "spring", stiffness: 200, delay: 0.1 * i}}
                >
                    {e}
                </motion.span>
            )}
        </div>
    </div>;
}