import {DebateHero} from "@/components/reusable/debateHero";

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
            <div className={'flex flex-row h-24 justify-center grid grid-cols-2 divide-x divide-grey'}>
                <p></p>
                <p></p>
            </div>
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