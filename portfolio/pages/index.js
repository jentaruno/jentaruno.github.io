import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import path from "path";

const assetsDirectory = path.join(process.cwd(), 'assets/');

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Coding</h2>
                <div className={utilStyles.list}>
                    {allPostsData.map(({id, stack, link, date, title, desc}) => (
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
            {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Graphic Design</h2>
        <div className={utilStyles.list}>
          {allPostsData.map(({ id, stack, link, date, title, desc }) => (
            <div className={utilStyles.listItem} key={id}>
              <div className={utilStyles.listThumbnail}>
                <img alt={id} src={`./images/${id}.png`}></img>
              </div>
            </div>
          ))}
        </div>
      </section> */}
        </Layout>
    )
}

export async function getStaticProps() {
    // const folderNames = fs.readdirSync(assetsDirectory)
    let allPostsData = getSortedPostsData("coding")
    // folderNames.map(folderName => {
    //     allPostsData.push(getSortedPostsData(folderName))
    // })
    return {
        props: {
            allPostsData
        }
    }
}
