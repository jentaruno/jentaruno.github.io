'use client'
import {motion} from "framer-motion";

export function SectionHeading(props: { text: string }) {

    const words = props.text.split(" ");

    return (
        <div className={"flex flex-row flex-wrap font-card tracking-tight text-3xl text-green-600 justify-center"}>
            {words.map((e, i) =>
                <motion.span
                    key={e + i}
                    className={'mr-4'}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{type: "spring", stiffness: 70, delay: 0.1 * i}}
                >
                    {e}
                </motion.span>
            )}
        </div>
    );
}