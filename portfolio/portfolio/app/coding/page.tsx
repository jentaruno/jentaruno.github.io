import {PlayingCard} from "@/components/reusable/playingCard";
import React from "react";

export default function Coding() {
    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-white"}>
            <div className={'w-full lg:w-3/4 grid grid-cols-1 divide-y divide-green-200'}>
                <div className={'flex flex-col items-center py-20'}>
                    <p className={'text-8xl font-bold mb-4'}>
                        Coding
                    </p>
                    <div className={'flex flex-row space-x-8'}>
                        {[
                            {
                                value: 'A',
                                face: '[',
                                name: "Web Development"
                            },
                            {
                                value: 'K',
                                face: ']',
                                name: "Mobile App Development"
                            },
                            {
                                value: 'Q',
                                face: '{',
                                name: "WordPress"
                            },
                            {
                                value: 'J',
                                face: '}',
                                name: "Augmented Reality"
                            }
                        ]
                            .map(e => <PlayingCard
                                size={'sm'}
                                cardValue={e.value}
                                cardFace={e.face}
                            >
                                {e.name}
                            </PlayingCard>)}
                    </div>
                </div>
            </div>
        </div>
    )
}