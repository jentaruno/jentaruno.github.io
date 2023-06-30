import PoemBook from "@/components/poemBook";

export default function Poems() {
    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-white"}>
            <p className={'text-8xl font-bold mb-8'}>Poems</p>
            <h2 className={'text-green-600'}>Flavors from over the years</h2>
            <PoemBook/>
        </div>
    )
}