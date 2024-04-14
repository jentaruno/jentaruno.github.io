'use client'

import {useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import parseMarkdown from "@/components/fnParseMarkdown";

export default function Maverick() {
    const poems = [
        {
            title: "One",
            date: "2017-05-13",
            desc: "I want to be awake when everyone is asleep,\\" +
                "I want to produce when everyone consumes.\\" +
                "I want to be a Finch in an age of digital cocaine,\\" +
                "Living a gracefully roller-coastering life\\" +
                "While everyone revolves around their little minds,\\" +
                "With their inflated expectations and hypocritical beliefs\\" +
                "Their dismissive pessimism and their same old issues\\" +
                "While they sit in the Waiting Train for a time close to forever,\\" +
                "I'll be out in the meadows they see from the windows,\\" +
                "Playing tag with my mates on a journey to catch the stars,\\" +
                "As if not a single thing can go wrong in our lives."
        },
        {
            title: "Two",
            date: "2020-09-04",
            desc: "Oh, to be freely being!\\" +
                "To be shutting your ears and ramming the wrecking ball toward the bastions of social acceptableness.\\" +
                "No wonder I better love my life the less it is shared,\\" +
                "All I'm here for is to be for a small town of people who matter to me."
        },
        {
            title: "Three",
            date: "2021-11-14",
            desc: "I'll be an animal.\\" +
                "I'll be unfazed by the ferocity \\" +
                "of this civilized wilderness, \\" +
                "this wired, insufferable human mess.\\" +
                "Burnt out bodies in a uniform, \\" +
                "diverse minds that conform. \\" +
                "The crowd they avoid with anxiety,\\" +
                "the mass they call society. \\" +
                "\\" +
                "It would be a terrible sin\\" +
                "to keep hiding under your skin—\\" +
                "You were born wild and free,\\" +
                "so be untamed without apology."
        },
        {
            title: "Four",
            date: "2023-02-01",
            desc: "It really is sickening to go with the crowd\\" +
                "Short on substance and long on sleaze\\" +
                "Full of walking doormats dressed in suits\\" +
                "So eager to flatter and people please"
        },
    ];

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? poems.length - 1 : index - 1;
        setIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = index === poems.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
    }

    const goToSlide = (newIndex: number) => {
        setIndex(newIndex);
    }

    return (
        <div className={'mt-4 pb-12'}>
            <div className={'w-full m-auto px-4 relative group'}>
                <div className={'flex flex-col w-[70vw] md:w-[50vw] lg:w-[40vw] h-min justify-center'}>
                    <div className={'flex flex-col md:flex-row justify-between mb-2'}>
                        <h1 className={'font-serif uppercase'}>
                            The<br/>
                            Maverick,<br/>
                            {poems[index].title}
                        </h1>
                        <p className={'font-serif text-green-600'}>{poems[index].date}</p>
                    </div>
                    <div>
                        <span className={'font-serif mt-2 text-xs md:text-sm leading-loose md:leading-loose'}>
                            {parseMarkdown(poems[index].desc)}
                        </span>
                    </div>
                </div>
                <div
                    onClick={prevSlide}
                    className={'z-20 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-12 md:-left-16 text-2xl rounded-full p-2 bg-green-900/40 cursor-pointer'}>
                    <ChevronLeftIcon className={'h-8 w-8 fill-white'}/>
                </div>
                <div
                    onClick={nextSlide}
                    className={'z-20 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-12 md:-right-16 text-2xl rounded-full p-2 bg-green-900/40 cursor-pointer'}>
                    <ChevronRightIcon className={'h-8 w-8 fill-white'}/>
                </div>
                <div className={'flex top-4 justify-center py-4'}>
                    {poems.map((slide, slideIndex) => (
                        <div
                            key={`dot-${slideIndex}`}
                            onClick={() => goToSlide(slideIndex)}
                            className={index == slideIndex
                                ? 'm-1 text-xs text-green-900 cursor-pointer'
                                : 'm-1 text-xs text-green-600 cursor-pointer'}>
                            ⬤
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}