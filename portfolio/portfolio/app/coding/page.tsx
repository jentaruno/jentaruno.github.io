'use client'
import {PlayingCard} from "@/components/reusable/playingCard";
import React, {useRef, useState} from "react";
import {CodingHero} from "@/components/reusable/codingHero";
import {CodingData} from "@/codingData"
import {motion} from "framer-motion";
import ScrollToTopButton from "@/components/reusable/scrollToTop";

export default function Coding() {
    // TODO: carousel on mobile
    // TODO: scroll to section
    const [currentCard, setCurrentCard] = useState(0);
    const content = useRef<HTMLDivElement | null>(null);

    async function handleFlipCard(i: number) {
        setCurrentCard(i);
        setTimeout(() =>
                content.current?.scrollIntoView({behavior: 'smooth', block: 'start'}),
            500);
    }

    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-white"}>
            <div className={'w-full grid grid-cols-1 divide-y divide-green-200'}>
                <div className={'flex flex-col items-center py-16'}>
                    <div className={'flex flex-col justify-center'}>
                        <h1 className={'text-center text-8xl font-bold'}>
                            Coding
                        </h1>
                        <div className={"flex flex-row flex-wrap items-center justify-center space-x-8 space-y-8"}>
                            <span/>
                            {CodingData.map((e: { name: string, face: string, value: string }, i: number) =>
                                <motion.span
                                    className={""}
                                    transition={{type: "spring", stiffness: 70}}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -5,
                                        transition: {duration: 0.2},
                                    }}
                                >
                                    <PlayingCard
                                        key={`coding-card-${i}`}
                                        flipped={currentCard == i}
                                        handleClick={() => handleFlipCard(i)}
                                        size={'sm'}
                                        cardValue={e.value}
                                        cardFace={e.face}
                                    >
                                        <h4 className={'font-bold'}>{e.name}</h4>
                                    </PlayingCard>
                                </motion.span>
                            )}
                        </div>

                        <div ref={content} className={'pt-32'}>
                            {CodingData.map((e, i: number) =>
                                <div className={currentCard == i ? 'flex flex-col space-y-16' : 'hidden'}>
                                    {e.blocks.map((hero, j) =>
                                        <CodingHero
                                            key={`hero-${i}-${j}`}
                                            link={hero.link}
                                            src={hero.src}
                                            title={hero.title}
                                            desc={hero.desc}
                                            languages={hero.languages}
                                            statNumber={hero.statNumber}
                                            statDesc={hero.statDesc}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopButton/>
        </div>
    );
}