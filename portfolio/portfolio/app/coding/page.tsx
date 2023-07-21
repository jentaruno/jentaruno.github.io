import React from "react";
import {CodingCards} from "@/components/codingCards";

export default function Coding() {
    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-white"}>
            <div className={'w-full lg:w-full grid grid-cols-1 divide-y divide-green-200'}>
                <div className={'flex flex-col items-center py-20'}>
                    <p className={'text-8xl font-bold mb-4'}>
                        Coding
                    </p>
                    <CodingCards/>
                </div>
            </div>
        </div>
    )
}