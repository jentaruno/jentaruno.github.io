import fs from 'fs';
import path from 'path';

const drawingDir = path.join(process.cwd(), 'public', 'drawing');
function getDrawingImages(): string[] {
    try {
        return fs
            .readdirSync(drawingDir)
            .filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file))
            .sort((a, b) => b.localeCompare(a))
            .map((file) => `/drawing/${file}`);
    } catch (err) {
        return [];
    }
}

export default function Drawing() {
    const images = getDrawingImages();

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
            <div className={'flex flex-col items-center pt-8 pb-24 w-full'}>
                <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src) => (
                        <div key={src} className="relative">
                            <img
                                className="h-auto w-full max-w-full rounded-base"
                                src={src}
                                alt="Drawing sample"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}