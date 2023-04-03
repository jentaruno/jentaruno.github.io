import bookStyles from './poems.module.css'
import {useState} from "react";
import utilStyles from "../styles/utils.module.css";
import Date from "./date";

// TODO: make responsive
export default function Poems({content}) {
    const maxPage = content.length
    const [currentPage, setCurrentPage] = useState(0)

    function handlePageClick(index) {
        if (index % 2 === 0) {
            setCurrentPage(currentPage + 2)
        } else {
            setCurrentPage(currentPage - 2)
        }
    }

    function setZIndex(index, maxPage) {
        if (index % 2 === 0) {
            return {zIndex: maxPage - index}
        }
    }

    function setFlippedState(index) {
        if (currentPage > index) {
            return bookStyles.flipped
        } else {
            return ""
        }
    }

    function parseMarkdown(md) {
        let removeLineBreaks = md.split("\\");
        let htmlOutput = removeLineBreaks.map((e) => {
            if (e === " ") {
                return <br></br>
            } else {
                return <p className={bookStyles.poemText}>{e}</p>
            }
        })
        return <>{htmlOutput}</>
    }

    return <>
        <div className={bookStyles.book}>
            <div id="classNames" className={bookStyles.pages}>
                {content.map(({id, title, date, desc}, index) =>
                    (
                        <div className={`${bookStyles.page} ${setFlippedState(index)}`} id={index}
                             onClick={() => handlePageClick(index)}
                             style={setZIndex(index, maxPage)}>
                            <div className={bookStyles.pageContent}>
                                <div className={utilStyles.itemTitle}>
                                    {title}
                                </div>
                                <small className={utilStyles.itemDate}>
                                    <Date dateString={date}/>
                                </small>
                                <br/>
                                <small className={utilStyles.itemDesc}>
                                    {parseMarkdown(desc)}
                                </small>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </>
}