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


    return (
        <div>
            
            <div className={'h-96 w-full m-auto px-4 relative group'}>
                <div
                    style={{backgroundImage: `url(${slides[index]})`}}
                    className={'w-full h-full rounded-xl bg-center bg-cover duration-500'}>
                </div>
                <div
                    onClick={prevSlide}
                    className={'opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-green-900/20 cursor-pointer'}>
                    <ChevronLeftIcon className={'h-8 w-8 fill-white'}/>
                </div>
                <div
                    onClick={nextSlide}
                    className={'opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-green-900/20 cursor-pointer'}>
                    <ChevronRightIcon className={'h-8 w-8 fill-white'}/>
                </div>
            </div>
        </div>
    )
}