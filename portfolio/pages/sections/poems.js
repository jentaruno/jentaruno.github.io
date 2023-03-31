import bookStyles from '../../styles/book-scroll.module.css'
import {useState} from "react";

export default function Poems({ content }) {
    const maxPage = content.length
    const [currentPage, setCurrentPage] = useState(0)

    function handlePageClick(id, maxPage) {
        if (id % 2 === 0 && (currentPage + 2) <= maxPage) {
            setCurrentPage(currentPage + 2)
            console.log("page" + currentPage)
        } else if ((currentPage - 2) >= 0) {
            setCurrentPage(currentPage - 2)
            console.log("page" + currentPage)
        }
    }

    return <>
        <div className={bookStyles.book}>
            <div id="classNames" className={bookStyles.pages}>
                {content.map(({id, title, desc}, index) =>
                    (
                        <div className={`${bookStyles.page} ${currentPage === index ? "" : `${bookStyles.flipped}`}`} id={index}
                             onClick={(e) => handlePageClick(index, maxPage)}
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