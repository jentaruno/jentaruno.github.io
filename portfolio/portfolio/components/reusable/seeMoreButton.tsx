export function SeeMoreButton(props: { link: string }) {
    return <div className={"flex flex-row justify-center"}>
        <a href={props.link}>
            <button
                className={"py-3 px-5 bg-orange-700 text-white rounded-md drop-shadow-md transition-colors hover:bg-orange-800"}>
                See more
            </button>
        </a>
    </div>;
}