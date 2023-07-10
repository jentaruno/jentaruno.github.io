'use client'

import {DebateHero} from "@/components/reusable/debateHero";
import {motion} from "framer-motion";

export default function FeaturedDebate() {

    return (
        <div>
            <DebateHero
                year={2021}
                title={'World Schools Debate Team'}
                desc={'Top 0.5% of Indonesia. First from school to be selected.'}
                src={'/wsdc-team.jpg'}
                otherText={'also achieved in 2021'}
                strings={[
                    'Eurasian Semifinalist',
                    'Durham-Oxford-Cambridge Finalist (ESL)',
                    'Rotterdam Open Finalist (ESL)'
                ]}
            />
            <motion.div
                className={'my-8 md:my-0 flex flex-row h-24 justify-center grid grid-cols-2 divide-x divide-green-200'}
                initial={{height: 0}}
                whileInView={{height: '6rem'}}
                transition={{duration: 0.4, delay: 0.3}}
            >
                <p></p>
                <p></p>
            </motion.div>
            <DebateHero
                year={2022}
                title={'World Schools Debate Coach'}
                desc={'Coached the team to Octofinals. Raised country rank from B to AB.'}
                src={'/wsdc-coach.jpg'}
                otherText={'also achieved in 2021'}
                strings={[
                    'Asian Semifinalist',
                    'Eurasian Quarterfinalist',
                    'Durham-Oxford-Cambridge Silver Champion'
                ]}
            />
        </div>
    );
}