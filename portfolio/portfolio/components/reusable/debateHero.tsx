import Image from "next/image";

export function DebateHero(props: { year: number, title: string, desc: string, src: string, otherText: string, strings: string[], }) {
    return <div>
        <div className={"flex flex-col lg:flex-row justify-center"}>
            <div className={"flex flex-col lg:w-1/3 lg:mr-8 justify-center"}>
                <h2 className={"font-bold mb-4"}>{props.title}</h2>
                <p className={'text-green-600'}>{props.desc}</p>
            </div>
            <div className={'lg:w-1/3 bg-white flex flex-col justify-center rounded-md drop-shadow-md'}>
                <div className={"text-center text-green-600 font-bold tracking-wider"}>
                    {props.year}
                </div>
                <div className={"relative h-64"}>
                    <Image
                        fill={true}
                        className={"rounded-b-md"}
                        src={props.src}
                        alt={props.title}
                        style={{objectFit: "cover"}}
                    />
                </div>
            </div>
            <div className={"flex flex-col lg:w-1/3 lg:ml-8 justify-center"}>
                        <span className={"uppercase text-sm text-orange-700 font-bold tracking-widest mb-2"}>
                            {props.otherText}
                        </span>
                <ul className={"list-disc list-outside ml-4"}>
                    {props.strings.map(e =>
                        <li>
                            {e}
                        </li>)}
                </ul>
            </div>
        </div>
    </div>;
}