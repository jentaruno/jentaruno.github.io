export default function PageNavs() {
    return (
        <div className={'text-orange font-bold'}>
            <ul className="flex">
                {[
                    ['Home', '/'],
                    ['Coding', '/coding'],
                    ['Design', '/design'],
                    ['Debate', '/debate'],
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