'use client'

import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
import {motion} from "framer-motion";

export default function FeaturedDesign() {

    const slides = ["/eufouria.png", "/komodo-hacks.png", "/pango-latte.png", "/jdf-open.jpg", "/wsdc-design.jpg"]
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
        setIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = index === slides.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
    }

    const goToSlide = (newIndex: number) => {
        setIndex(newIndex);
    }

    return (
        <div className={'pb-12'}>
            <motion.div
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{type: "spring", stiffness: 70, delay: 0.2}}
            >
                <div className={'w-full m-auto px-4 relative group'}>
                    <div className={'flex flex-row w-full items-center relative'}>
                        <div
                            style={{
                                backgroundImage: `url(${
                                    index == 0 ? slides[slides.length - 1] : slides[index - 1]
                                })`
                            }}
                            className={'w-[25vw] h-[37.5vw] max-w-48 max-h-72 rounded-l-xl blur-sm bg-left bg-cover drop-shadow-md duration-300'}>
                        </div>
                        <div
                            style={{backgroundImage: `url(${slides[index]})`}}
                            className={'w-[50vw] h-[50vw] max-w-96 max-h-96 rounded-xl z-10 bg-center bg-cover drop-shadow-xl duration-300'}>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${
                                    index == slides.length - 1 ? slides[0] : slides[index + 1]})`
                            }}
                            className={'w-[25vw] h-[37.5vw] max-w-48 max-h-72 rounded-r-xl blur-sm bg-right bg-cover drop-shadow-md duration-300'}>
                        </div>
                    </div>
                    <div
                        onClick={prevSlide}
                        className={'z-20 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 sm:left-20 text-2xl rounded-full p-2 bg-white cursor-pointer'}>
                        <ChevronLeftIcon className={'h-8 w-8 fill-green-900'}/>
                    </div>
                    <div
                        onClick={nextSlide}
                        className={'z-20 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 sm:right-20 text-2xl rounded-full p-2 bg-white cursor-pointer'}>
                        <ChevronRightIcon className={'h-8 w-8 fill-green-900'}/>
                    </div>
                    <div className={'flex top-4 justify-center py-4'}>
                        {slides.map((slide, slideIndex) => (
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
            </motion.div>
        </div>
    )
}