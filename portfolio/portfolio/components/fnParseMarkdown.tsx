import bookStyles from "@/components/poems.module.css";

export default function parseMarkdown(md: string) {
    let removeLineBreaks = md.split("\\");
    return removeLineBreaks.map((e) => {
        if (e === " ") {
            return <br></br>
        } else {
            return <p className={bookStyles.poemText}>{e}</p>
        }
    })
}