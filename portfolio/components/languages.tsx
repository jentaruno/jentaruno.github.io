'use client'

import {motion} from "framer-motion";

export default function Languages() {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{type: "spring", stiffness: 200, delay: 0.2}}
        >
            <h4 className={'text-green-600'}>I've worked with</h4>
            <h3 className={'font-bold text-justify leading-normal [word-spacing:1rem]'}>
                JavaScript
                TypeScript
                HTML
                CSS
                Python
                C#
                C++
                Java
                React.js
                Next.js
                TailwindCSS
                Sass
                Flutter
                MongoDB
                SQLite
                Unity
                WordPress
            </h3>
        </motion.div>
    )
}