import utilStyles from "../styles/utils.module.css"
import designStyles from "./design.module.css"
import Date from "./date";

export default function Design({content}) {
    return <div className={designStyles.grid}>
        {content.map(({id, date, title, desc}) => (
            <div className={designStyles.item} key={id}>
                <div className={designStyles.itemThumbnail}>
                    <img alt={id} src={`./images/${id}.png`}></img>
                </div>
                <row className={designStyles.rowJustifyBetween}>
                    <b className={utilStyles.itemTitle}>{title}</b>
                    <small className={designStyles.itemDate}>
                        <Date dateString={date}/>
                    </small>
                </row>
                <small className={utilStyles.itemDesc}>
                    {desc}
                </small>
            </div>
        ))}
    </div>
}