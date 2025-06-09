export function SeeMoreButton(props: { link: string, newTab?: boolean }) {
    return <div className={"flex flex-row justify-center"}>
        <a href={props.link} target={props.newTab ? "_blank" : "_blank"}>
            <button
                className={"text-green-600 transition-colors underline underline-offset-4 hover:decoration-orange-700"}>
                See more
            </button>
        </a>
    </div>;
}