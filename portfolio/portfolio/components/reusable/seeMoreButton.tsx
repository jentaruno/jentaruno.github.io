export function SeeMoreButton(props: { link: string }) {
    return <div className={"flex flex-row justify-center"}>
        <a href={props.link}>
            <button
                className={"py-3 px-5 text-green-600 rounded-md transition-colors underline underline-offset-4 hover:decoration-orange-700"}>
                See more
            </button>
        </a>
    </div>;
}