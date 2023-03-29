import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSectionNames, getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

const codingFolder = 'coding'
const designFolder = 'design'
const poemsFolder = 'poems'

export default function Home({folderPostsData}) {
    let allPostsData = new Map(folderPostsData.map(obj => [obj.key, obj.value]));
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Coding</h2>
                <div className={utilStyles.list}>
                    {allPostsData.get(codingFolder).map(({id, stack, link, date, title, desc}) => (
                        <div className={utilStyles.listItem} key={id}>
                            <div className={utilStyles.listThumbnail}>
                                <img alt={id} src={`./images/${id}.png`}></img>
                            </div>
                            <row>
                                <Link className={utilStyles.listTitle} href={`${link}`}
                                      target='_blank'><b>{title}</b></Link>
                                <small> | {stack}</small>
                            </row>
                            <br/>
                            <small className={utilStyles.listDate}>
                                <Date dateString={date}/>
                            </small>
                            <br/>
                            <small className={utilStyles.listDesc}>
                                {desc}
                            </small>
                        </div>
                    ))}
                </div>
            </section>
            {/*<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>*/}
            {/*    <h2 className={utilStyles.headingLg}>Graphic Design</h2>*/}
            {/*    <div className={utilStyles.list}>*/}
            {/*        {allPostsData.get(poemsFolder).map(({id, title, date, desc}) => (*/}
            {/*            <div className={utilStyles.listItem} key={id}>*/}
            {/*                <div className={utilStyles.listThumbnail}>*/}
            {/*                    <img alt={id} src={`./images/${id}.png`}></img>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className={`${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Poems</h2>
                <div className={utilStyles.list}>
                    {allPostsData.get(poemsFolder).map(({id, title, date, desc}) => (
                        <div className={utilStyles.listItem} key={id}>
                            <div className={utilStyles.headingMd}>
                                {title}
                            </div>
                            <small className={utilStyles.listDate}>
                                <Date dateString={date}/>
                            </small>
                            <div className={utilStyles.listDesc}>
                                {desc}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    let folderNames = getSectionNames()
    let folderPostsData = [];
    folderNames.map(folderName => {
        folderPostsData.push({key: folderName, value: getSortedPostsData(folderName)})
    })

    return {
        props: {
            folderPostsData
        }
    }
}
