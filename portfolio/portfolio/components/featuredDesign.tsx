'use client'

import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import {useState} from "react";

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
            <div className={'h-96 w-full m-auto px-4 relative group'}>
                <div className={'flex flex-row w-full h-96 items-center relative'}>
                    <div
                        style={{
                            backgroundImage: `url(${
                                index == 0 ? slides[slides.length - 1] : slides[index - 1]
                            })`
                        }}
                        className={'w-48 h-3/4 rounded-l-xl blur-sm bg-left bg-cover drop-shadow-md duration-300'}>
                    </div>
                    <div
                        style={{backgroundImage: `url(${slides[index]})`}}
                        className={'w-96 h-full rounded-xl z-10 bg-center bg-cover drop-shadow-xl duration-300'}>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${
                                index == slides.length - 1 ? slides[0] : slides[index + 1]})`
                        }}
                        className={'w-48 h-3/4 rounded-r-xl blur-sm bg-right bg-cover drop-shadow-md duration-300'}>
                    </div>
                </div>
                <div
                    onClick={prevSlide}
                    className={'z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-20 text-2xl rounded-full p-2 bg-green-900/40 cursor-pointer'}>
                    <ChevronLeftIcon className={'h-8 w-8 fill-white'}/>
                </div>
                <div
                    onClick={nextSlide}
                    className={'z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-20 text-2xl rounded-full p-2 bg-green-900/40 cursor-pointer'}>
                    <ChevronRightIcon className={'h-8 w-8 fill-white'}/>
                </div>
                <div className={'flex top-4 justify-center py-4'}>
                    {slides.map((slide, slideIndex) => (
                        <div
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