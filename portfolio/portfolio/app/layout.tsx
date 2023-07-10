import './globals.css'
import {Inter} from 'next/font/google'
import PageNavs from "@/components/reusable/pageNavs";
import Contact from "@/components/reusable/contact";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: "Jen Taruno",
    description: "Jen's personal website",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={"bg-white"}>
            <div className="flex flex-row justify-center bg-white">
                <PageNavs/>
            </div>
            <div className={"flex flex-row justify-center"}>
                {children}
            </div>
            <div className={'w-full bg-white px-8 lg:px-20 pt-4 pb-8 drop-shadow-2xl'}>
                <Contact/>
            </div>
        </div>
        </body>
        </html>
    )
}