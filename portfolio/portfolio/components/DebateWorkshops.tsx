import Link from "next/link";
import Image from "next/image";

function WorkshopCard(props: { src: string, title: string, date: string, link: string }) {
    return <Link
                href={props.link}
                className={"px-4 py-4 hover:bg-green-200 transition-all duration-200 hover:rounded-2xl hover:drop-shadow-md"}
            >
            <div className={'flex flex-col md:flex-row space-x-4 items-center'}>
                <Image
                    className={'rounded-lg'}
                    alt={"workshop-" + props.title}
                    height={150}
                    width={200}
                    src={props.src}
                    style={{objectFit: "cover"}}
                />
                <div>
                    <h4 className={"mt-2 font-bold"}>{props.title}</h4>
                    <p className={'mt-1 text-sm text-green-600'}>{props.date}</p>
                </div>
            </div>
    </Link>
}

export default function DebateWorkshops() {
    const workshops = [
        {
            img: 'https://i.ytimg.com/vi/hlKi1UbJX0g/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDfkmye_dlg78mWubi5sCC8fH2Ozg',
            title: 'How to Ace Debates You Know Nothing About',
            date: 'Aug 2021',
            link: 'https://www.youtube.com/watch?v=hlKi1UbJX0g'
        },
        {
            img: 'workshop2.png',
            title: 'How To Make A Solid Setup',
            date: 'Jan 2022',
            link: 'https://www.youtube.com/watch?v=DSwfOqK9R_8'
        },
        {
            img: 'workshop3.png',
            title: 'Debating for Newbies (Varsity)',
            date: 'Jan 2022',
            link: 'https://youtu.be/8dwA_dvjR4g?si=T9pMb4n3whydq2V_&t=616'
        }
    ]

    return (
        <div className={'flex flex-col'}>
            {workshops.map((e,i) =>
                <WorkshopCard
                    key={`card-${i}`}
                    src={e.img}
                    title={e.title}
                    date={e.date}
                    link={e.link}
                />
            )}
        </div>
    )
}