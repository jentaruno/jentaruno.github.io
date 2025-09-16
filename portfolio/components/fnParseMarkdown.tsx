export default function parseMarkdown(md: string) {
    let removeLineBreaks = md.split("\\");
    return removeLineBreaks.map((e) => {
        if (e === " ") {
            return <br></br>
        } else {
            return <p>{e}</p>
        }
    })
}