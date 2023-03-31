import utilStyles from "../../styles/utils.module.css"
import codingStyles from "../../styles/coding.module.css"
import Link from "next/link";
import Date from "../../components/date";

export default function Coding({content}) {
    return <div className={codingStyles.grid}>
        {content.map(({id, stack, link, date, title, desc}) => (
            <div className={codingStyles.item} key={id}>
                <a href={link} target='_blank'>
                    <div className={codingStyles.itemThumbnail}>
                        <img alt={id} src={`./images/${id}.png`}></img>
                    </div>
                </a>
                <row className={codingStyles.rowJustifyBetween}>
                    <Link className={utilStyles.itemTitle} href={link}
                          target='_blank'><b>{title}</b></Link>
                    <small className={codingStyles.itemStack}>{stack}</small>
                </row>
                <small className={utilStyles.itemDate}>
                    <Date dateString={date}/>
                </small>
                <br/>
                <small className={utilStyles.itemDesc}>
                    {desc}
                </small>
            </div>
        ))}
    </div>
}