'use client'

import Image from "next/image";
import React, {ReactNode, useState} from 'react';

export const PlayingCard =
    (props: {
        size: string,
        cardValue: string,
        cardFace: string,
        children: ReactNode
    }) => {

        const [flipped, setFlipped] = useState(false);
        // TODO: framer transition flip after slide in
        return (
            <div className={`group ${props.size == 'sm' ? 'w-48' : 'w-72'}
            ${props.size == 'sm' ? 'h-64' : 'h-96'} [perspective:1000px]`}
                 onClick={() => setFlipped(!flipped)}>
                <div
                    className={`relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}`}>
                    <div className="absolute inset-0">
                        <Image
                            width={300}
                            height={400}
                            className={'p-4 h-full w-full'}
                            src={'/card-bg.png'}
                            alt={'card-bg'}
                        />
                    </div>
                    <div
                        className="absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div
                            className={`flex min-h-full flex-col items-center justify-center font-card`}>
                            <div className="flex items-center justify-between">
                                <div
                                    className={`${props.size == 'sm' ? 'text-2xl' : 'text-4xl'} ${props.cardFace == '[' || props.cardFace == '{' ? 'text-orange-700' : 'text-green-900'} transform absolute top-1 left-1`}>
                                    <p>{props.cardValue}</p>
                                    <p>{props.cardFace}</p>
                                </div>
                            </div>
                            <div
                                className={`${props.size == 'sm' ? 'text-2xl' : 'text-4xl'} ${props.cardFace == '[' || props.cardFace == '{' ? 'text-orange-700' : 'text-green-900'} transform rotate-180 absolute bottom-1 right-1`}>
                                <p>{props.cardValue}</p>
                                <p>{props.cardFace}</p>
                            </div>
                            <div className="flex items-center justify-center absolute inset-0 p-8">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }