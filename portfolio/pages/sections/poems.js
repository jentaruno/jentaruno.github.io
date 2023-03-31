import bookStyles from '../../styles/book-scroll.module.css'
import {useState} from "react";

export default function Poems({ content }) {
    const maxPage = content.length
    const [currentPage, setCurrentPage] = useState(0)

    function handlePageClick(e, maxPage) {
        if (e.id < maxPage) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(0)
        }
    }

    return <>
        <div className={bookStyles.book}>
            <div id="classNames" className={bookStyles.pages}>
                {content.map(({id, title, desc}) =>
                    (
                        <div className={`${bookStyles.page} ${currentPage === id ? "flipped" : ""}`} id={id}
                             onClick={(e) => handlePageClick(e, maxPage)}
                            style={{zIndex: (maxPage - id)}}>
                            {title}
                            <br/>
                            {desc}
                        </div>
                ))}
            </div>
        </div>
    </>
}