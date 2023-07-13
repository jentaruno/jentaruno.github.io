import './globals.css'
import {Inter, Vollkorn} from 'next/font/google'
import PageNavs from "@/components/reusable/pageNavs";
import Contact from "@/components/reusable/contact";

const inter = Inter({subsets: ['latin']})
const vollkorn = Vollkorn({subsets: ['latin']})
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
        <html lang="en" className={`${vollkorn.className} ${inter.className}`}>
        <body className={'bg-white font-sans'}>
        <header className="sticky top-0 z-50">
            <div className="flex flex-row justify-center bg-white">
                <PageNavs/>
            </div>
        </header>
        <div className={"flex flex-row justify-center"}>
            {children}
        </div>
        <footer id={'contact'} className={'w-full bg-white px-8 lg:px-20 pt-4 pb-8 drop-shadow-2xl'}>
            <Contact/>
        </footer>
        </body>
        </html>
    )
}
