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
            <div className={'flex flex-col items-center pt-8 pb-24'}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-base" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}