'use client'
import {motion} from "framer-motion";

export function SectionHeading(props: { text: string }) {

    const words = props.text.split(" ");

    return (
        <div className={"text-3xl text-green-600 text-center"}>
            {words.map((e, i) =>
                <motion.span
                    className={'mr-2'}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{type: "spring", stiffness: 70, delay: 0.1 * i}}
                >
                    {e}
                </motion.span>
            )}
        </div>
    );
}