import bookStyles from '../../styles/book-scroll.module.css'
export function processPoems() {
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        if (i % 2 === 0) {
            page.style.zIndex = (pages.length - i);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        for (let i = 0; i < pages.length; i++) {
            //Or var page = pages[i];
            pages[i].pageNum = i + 1;
            pages[i].onclick = function () {
                if (this.pageNum % 2 === 0) {
                    this.classList.remove('flipped');
                    this.previousElementSibling.classList.remove('flipped');
                } else {
                    this.classList.add('flipped');
                    this.nextElementSibling.classList.add('flipped');
                }
            }
        }
    })
}

export default function Poems({ content }) {
    console.log(JSON.stringify(content))
    return <>
        <div className={bookStyles.book}>
            <div id="classNames" className={bookStyles.pages}>
                {content.map(({title, desc}) =>
                    (
                        <div className={bookStyles.page}>
                            {title}
                            <br/>
                            {desc}
                        </div>
                ))}
            </div>
        </div>
    </>
}