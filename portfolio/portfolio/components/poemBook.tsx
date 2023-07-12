'use client'

import bookStyles from '@/components/poems.module.css'
import {useState} from "react";
import parseMarkdown from "@/components/fnParseMarkdown";

// TODO: make responsive
export default function PoemBook() {
    const content = [
        {
            title: "Losing All Strength",
            date: "2017-05-13",
            desc: "I had a hundred reasons to get over it\\" +
                "yet a thousand reasons to stay;\\" +
                "I had to face the fragment of me that still loved;\\" +
                "silence it, stab it, let it die away.\\" +
                "And as a thousand reasons wither\\" +
                "I hope I don’t,\\" +
                "as I picture it like all strength\\" +
                "is taken from me."
        },
        {
            title: "Sanctuary",
            date: "2020-09-04",
            desc: "It looks like all these years\\" +
                "You were always on the brink of tears\\" +
                "What haven must I make\\" +
                "For you to want to stay awake?\\" +
                "\\" +
                "In all our photographs\\" +
                "And all these paragraphs\\" +
                "I'm the only one smiling,\\" +
                "Your happiness is missing."
        },
        {
            title: "Distance is an Enemy",
            date: "2021-11-14",
            desc: "In the depths of my despair\\" +
                "You appeared and made me feel again\\" +
                "What should have been nauseating filth\\" +
                "Turned into memories that remain\\" +
                "\\" +
                "Will I be able to do the same\\" +
                "When I'm ten thousand miles away?\\" +
                "Will I even have the wits, the charm,\\" +
                "To be a presence that makes your day?"
        },
        {
            title: "Unnecessary Charity",
            date: "2023-02-01",
            desc: "All I wanted was to\\" +
                "Dance with you a little\\" +
                "Share a small fleeting moment\\" +
                "Celebrate the sparkle that is your existence\\" +
                "\\" +
                "But it appears I'm an unnecessary charity,\\" +
                "Not a source of malice, but one to politely decline\\" +
                "One to push away even when\\" +
                "Loneliness would be your counterfactual"
        }
    ]

    const maxPage = content.length
    const [currentPage, setCurrentPage] = useState(0)

    function handlePageClick(index: number) {
        if (index % 2 === 0) {
            setCurrentPage(currentPage + 2)
        } else {
            setCurrentPage(currentPage - 2)
        }
    }

    function setZIndex(index: number, maxPage: number) {
        if (index % 2 === 0) {
            return {zIndex: maxPage - index}
        }
    }

    function setFlippedState(index: number) {
        if (currentPage > index) {
            return bookStyles.flipped
        } else {
            return ""
        }
    }


    return <>
        <div className={bookStyles.book}>
            <div id="classNames" className={bookStyles.pages}>
                {content.map(({title, date, desc}, index) =>
                    (
                        <div className={`${bookStyles.page} ${setFlippedState(index)}`} id={index.toString()}
                             onClick={() => handlePageClick(index)}
                             style={setZIndex(index, maxPage)}>
                            <div className={'my-auto mx-4 sm:mx-12'}>
                                <p className={'leading-tight text-lg md:text-3xl font-serif uppercase'}>
                                    {title}
                                </p>
                                <p className={'md:my-2 text-[0.4rem] md:text-xs text-green-600'}>
                                    {date}
                                </p>
                                <span className={'text-[0.4rem] md:text-xs leading-loose'}>
                                    {parseMarkdown(desc)}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </>
}