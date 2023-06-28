import Image from "next/image";

export function CodingHero(props: {
    src: string,
    title: string,
    desc: string,
    languages: string[],
    statNumber: string,
    statDesc: string
}) {
    return <div className={"flex flex-col lg:flex-row"}>
        <div className={"relative h-64 lg:w-1/2 flex flex-col justify-center lg:mr-8"}>
            <Image
                fill={true}
                className={"rounded-md drop-shadow-md"}
                src={props.src}
                alt={props.title}
                style={{objectFit: "cover"}}
            />
        </div>
        <div className={"flex flex-col lg:w-1/2 lg:ml-8 justify-center"}>
            <h2 className={"text-orange-700 font-bold"}>
                {props.title}
            </h2>
            <p className={"mt-2"}>
                {props.desc}
            </p>
            <ul className="flex flex-row flex-wrap text-green-600">
                {props.languages.map(e =>
                    <li className={'text-sm bg-green-200 py-1 px-3 rounded-full mt-2 mr-2 uppercase'}>
                        {e}
                    </li>)}
            </ul>
            <div className={"w-full flex justify-between mt-4"}>
                <div>
                    <h2 className={"font-bold"}>
                        {props.statNumber}
                    </h2>
                    <p className={'text-green-600'}>{props.statDesc}</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>;
}