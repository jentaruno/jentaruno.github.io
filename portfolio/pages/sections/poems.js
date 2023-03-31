import bookStyles from '../../styles/book-scroll.module.css'
import {useState} from "react";

export default function Poems({content}) {
    const maxPage = content.length
    const [currentPage, setCurrentPage] = useState(0)

    function handlePageClick(id, maxPage) {
        if (id % 2 === 0) {
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
                {content.map(({id, title, desc}, index) =>
                    (
                        <div className={`${bookStyles.page} ${setFlippedState(index)}`} id={index}
                             onClick={(e) => handlePageClick(index, maxPage)}
                             style={setZIndex(index, maxPage)}>
                            {title}
                            <br/>
                            {desc}
                        </div>
                    ))}
            </div>
        </div>
    </>
}