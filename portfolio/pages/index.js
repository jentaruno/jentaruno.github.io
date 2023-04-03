import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Poems from '../components/poems'
import Design from "../components/design";
import Coding from "../components/coding";
import utilStyles from '../styles/utils.module.css'
import {getSectionNames, getSortedPostsData} from '../lib/posts'

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
                <Coding content={allPostsData.get(codingFolder)}></Coding>
            </section>
            <section>
                <h2 className={utilStyles.headingLg}>Design</h2>
                <Design content={allPostsData.get(designFolder)}></Design>
            </section>
            <section>
                <h2 className={utilStyles.headingLg}>Poems</h2>
                <Poems content={allPostsData.get(poemsFolder)}></Poems>
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
