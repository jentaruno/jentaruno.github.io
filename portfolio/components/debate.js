import codingStyles from "./coding.module.css";
import Image from "next/image";

export default function Debate() {
    return <div>
        <div className={codingStyles.rowJustifyBetween}>
            <Image
                src="./images/nsdc-pic.png"
                width={300}
                height={360}
                alt={"NSDC award picture"}
            />
            <div className={codingStyles.itemStack}>
                <p>I was selected into <i>Team Indonesia for WSDC</i> in 2021,
                    but did not reach elims and needed a redemption arc.
                    So I took a gap year and <i>coached the 2022 team</i>.
                    Thankfully, the team made it to Octofinals and I'm not taking another gap year.
                    <br></br>
                    <br></br>
                    <a href="https://disputandum.com/" target="_blank">→ Read my debate blog</a>
                    <br></br>
                    <a href="https://www.youtube.com/playlist?list=PLIPzQw1L3g8LCpCEWYRGul5X3NjDErJ5x"
                       target="_blank">→ Watch my speeches</a>
                </p>
            </div>
        </div>
        <br></br>
    </div>
}