import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Portfolio</h2>
        <div className={utilStyles.list}>
          {allPostsData.map(({ id, stack, link, date, title, desc }) => (
            <div className={utilStyles.listItem} key={id}>
              <div className={utilStyles.listThumbnail}>
                <img src={`/images/${id}.png`}></img>
              </div>
              <row>
                <Link href={`${link}`} target='_blank'><b>{title}</b></Link>
                <small> | {stack}</small>
              </row>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br />
              <small className={utilStyles.listDesc}>
                {desc}
              </small>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
