import './globals.css'
import PageNavs from "@/components/reusable/pageNavs";
import Contact from "@/components/reusable/contact";
import localFont from 'next/font/local'

const inter = localFont({
    src: './inter.ttf',
    display: 'swap',
    variable: '--font-sans'
})
const vollkorn = localFont({
    src: './vollkorn.ttf',
    display: 'swap',
    variable: '--font-serif'
})
const cardCharacters = localFont({
    src: './card-characters.ttf',
    display: 'swap',
    variable: '--font-card'
})
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
        <html lang="en" className={`${cardCharacters.variable} ${vollkorn.variable} ${inter.variable}`}>
        <body className={'bg-green-100 font-sans'}>
        <header className="sticky top-0 z-50">
            <div className="flex flex-row justify-center bg-green-100">
                <PageNavs/>
            </div>
        </header>
        <div className={"flex flex-row justify-center font-sans bg-green-100"}>
            {children}
        </div>
        <footer id={'contact'} className={'w-full bg-green-100 px-8 lg:px-20 pt-4 pb-8 drop-shadow-2xl'}>
            <Contact/>
        </footer>
        </body>
        </html>
    )
}
