'use client'
import {PlayingCard} from "@/components/reusable/playingCard";
import React, {useState} from "react";

export function CodingCards() {
    const cards = [
        {
            value: "A",
            face: "[",
            name: "Web Development"
        },
        {
            value: "K",
            face: "]",
            name: "Mobile App Development"
        },
        {
            value: "Q",
            face: "{",
            name: "WordPress"
        },
        {
            value: "J",
            face: "}",
            name: "Augmented Reality"
        }
    ];
    const [currentCard, setCurrentCard] = useState(0);
    return <div className={"flex flex-row flex-wrap md:space-x-8"}>
        {cards.map((e, i) => <PlayingCard
            key={`coding-card-${i}`}
            flipped={currentCard == i}
            handleClick={() => setCurrentCard(i)}
            size={'sm'}
            cardValue={e.value}
            cardFace={e.face}
        >
            <h4 className={'font-bold'}>{e.name}</h4>
        </PlayingCard>)}
    </div>;
}