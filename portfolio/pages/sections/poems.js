import bookStyles from './book-scroll.module.css'
function processPoems() {
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        if (i % 2 === 0) {
            page.style.zIndex = (pages.length - i);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        for (var i = 0; i < pages.length; i++) {
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
                {content.map(({title, date, desc}) =>
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