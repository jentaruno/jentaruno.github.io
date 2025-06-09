import {Suspense} from "react";

export default function CrosswordsPage() {
    return (
        <div className={"flex flex-col items-center px-8 lg:px-20 py-4 bg-green-100"}>
            <div className={'w-full lg:w-3/4 grid grid-cols-1 divide-y divide-green-200'}>
                <div className={'flex flex-col py-20 space-y-16'}>
                    <div className={'flex flex-col items-center gap-4'}>
                        <h1 className={'page-title mb-4'}>
                            Crosswords
                        </h1>
                        <p>After playing the NYT Crosswords daily for over a month... I got an itch to make some myself.</p>
                    </div>
                    <div className={'flex flex-col items-center space-y-8'}>
                        <Suspense fallback={<p>Loading...</p>}>
                        <iframe
                            style={{height: "50vh", width: "100%"}}
                            src="https://crosshare.org/embed/list/bzNBmn3vC1a0QZck6mnKGqOqGxO2"
                            allowFullScreen={true}
                            allowTransparency={true}
                            allow="clipboard-write *"/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}