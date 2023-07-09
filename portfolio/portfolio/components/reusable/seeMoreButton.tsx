export function SeeMoreButton(props: { link: string }) {
    return <div className={"flex flex-row justify-center"}>
        <a href={props.link}>
            <button
                className={"text-green-600 transition-colors underline underline-offset-4 hover:decoration-orange-700"}>
                See more
            </button>
        </a>
    </div>;
}