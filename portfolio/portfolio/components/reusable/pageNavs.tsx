'use client'
import React, {useState} from 'react';
import {motion} from "framer-motion";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div
            className={`w-full mt-0 flex flex-row sm:justify-center bg-white ${
                showMenu ? 'drop-shadow-lg' : 'drop-shadow-none'
            }`}>
            <div className={'hidden sm:flex flex-row w-full justify-between text-green-600 mx-8 my-4'}>
                <a className={'text-xl text-orange-700 font-bold font-card lowercase [word-spacing:-7px]'} href={'/'}>
                    Jen Taruno
                </a>
                <ul className="flex flex-row justify-end gap-1">
                    {[
                        ['Coding', '/coding'],
                        ['Design', 'https://www.instagram.com/jentaruno/'],
                        ['Debate', 'https://disputandum.com/'],
                        ['Contact', '/#contact'],
                    ].map(([title, url], i) => (
                        <li key={`nav-${i}`} className={'mr-6'}>
                            <a href={url}
                               className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="block sm:hidden flex flex-row items-center pl-2 pb-2">
                <div>
                    <button
                        className="text-orange-700 px-3 text-2xl"
                        onClick={toggleMenu}
                    >
                        &#9776;
                    </button>
                </div>
                <div className={showMenu ? 'block' : 'hidden'}>
                    <motion.ul
                        initial={{height: 0}}
                        whileInView={{height: 'auto'}}
                        exit={{height: 0}}
                        className={`mb-2 flex-col sm:mb-0 sm:gap-1`}
                    >
                        {[
                            ['Home', '/'],
                            ['Coding', 'https://github.com/jentaruno'],
                            ['Design', 'https://www.instagram.com/jentaruno/'],
                            ['Debate', 'https://disputandum.com/'],
                            ['Contact', '/contact'],
                        ].map(([title, url], i) => (
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.1, delay: 0.1 * i}}
                            >
                                <li
                                    key={`nav-${i}`}
                                    className={`${
                                        showMenu ? 'mb-2' : 'mr-6'
                                    } sm:mb-0`}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <a
                                        href={url}
                                        className="rounded-lg block px-3 py-2 hover:bg-slate-100 font-medium text-green-900 hover:text-orange-700"
                                    >
                                        {title}
                                    </a>
                                </li>
                            </motion.div>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
