export default function PageNavs() {
    return (
        <div className={'text-orange-700 text-sm font-bold'}>
            <ul className="flex">
                {[
                    ['Home', '/'],
                    ['Coding', 'https://github.com/jentaruno'],
                    ['Design', 'https://www.instagram.com/jentaruno/'],
                    ['Debate', 'https://disputandum.com/'],
                    ['Contact', '/contact'],
                ].map(([title, url]) => (
                    <li className={'mr-6'}>
                        <a href={url}
                           className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}