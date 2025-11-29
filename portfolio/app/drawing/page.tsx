export default function Drawing() {
    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-green-100"}>
            <div className={'flex flex-col items-center py-16 max-w-3xl'}>
                <div className={'flex flex-col justify-items-center gap-4'}>
                    <h1 className={'page-title mb-4'}>
                        Drawing
                    </h1>
                    <p>Before college, I taught myself to do lineart and thought that was good enough. When I failed to shade a box in college, I realised I need to practice coloring...</p>
                </div>
            </div>
        </div>
    );
}