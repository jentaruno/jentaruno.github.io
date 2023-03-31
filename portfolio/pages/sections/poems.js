import bookStyles from '../../styles/book-scroll.module.css'
import {useState} from "react";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";

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

    return <>
        <div className={bookStyles.book}>
            <div id="classNames" className={bookStyles.pages}>
                {content.map(({id, title, date, desc}, index) =>
                    (
                        <div className={`${bookStyles.page} ${setFlippedState(index)}`} id={index}
                             onClick={() => handlePageClick(index)}
                             style={setZIndex(index, maxPage)}>
                            <div className={bookStyles.pageContent}>
                                {<div className={utilStyles.listItem} key={id}>
                                        <div className={utilStyles.listTitle}>
                                            {title}
                                        </div>
                                        <small className={utilStyles.listDate}>
                                            <Date dateString={date}/>
                                        </small>
                                        <br/>
                                        <small className={utilStyles.listDesc}>
                                            {desc}
                                        </small>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </>
}