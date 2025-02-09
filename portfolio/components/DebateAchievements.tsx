'use client'

import { TrophyIcon } from "@heroicons/react/24/solid";

function DebateAchievement(props: { award: string, comp: string, stats: string }) {
    return (
        <div className={"flex flex-col md:flex-row justify-between md:items-center"}>
            <div>
                <div className={"flex flex-row items-center"}>
                    <TrophyIcon className={"h-6 w-6 mr-2 fill-orange-700"} />
                    <h4 className={"font-bold"}>{props.award}</h4>
                </div>
                <p>{props.comp}</p>
            </div>
            <p className={"text-green-600"}>{props.stats}</p>
        </div>
    );
}

export default function DebateAchievements() {
    const achievements = [
        {
            award: "Finalist (ESL)",
            comp: "Durham-Oxford Cambridge Online Open 2021",
            stats: "BP, 180+ teams"
        },
        {
            award: "Semifinalist",
            comp: "Eurasian Schools Debate Championship 2021",
            stats: "WSDC, 90+ teams"
        },
        {
            award: "Finalist (ESL)",
            comp: "Erasmus Rotterdam Open 2021",
            stats: "BP, 52 teams"
        },
        {
            award: "Octofinalist",
            comp: "Borneo BP Championships 2021",
            stats: "BP, 100+ teams"
        },
        {
            award: "Champion & 9th Best Speaker",
            comp: "Nepal Smart Debates Open",
            stats: "BP, 30 teams"
        },
        {
            award: "Semifinalist & Best Speaker (EFL)",
            comp: "Protea Worlds 2021",
            stats: "WSDC, 30 teams"
        },
        {
            award: "Best Speaker",
            comp: "EEC in Action 2021",
            stats: "BP, 52 teams",
        },
        {
            award: "Champion & 2nd Best Speaker",
            comp: "Hasanuddin British Parliamentary 2022",
            stats: "BP, 40 teams"
        },
        {
            award: "Runner-up",
            comp: "Aurgumentum Open 2024",
            stats: "BP, 92 teams"
        },
        {
            award: "Open Final Judge",
            comp: "Uhuru Worlds 2022",
            stats: "BP, 180+ teams"
        },
        {
            award: "Semifinal Chair (ESL)",
            comp: "Leiden Open 2022",
            stats: "BP, 70+ teams"
        },
        {
            award: "Quarterfinal Judge",
            comp: "Australasian Women's Debating Championships 2021",
            stats: "BP, 42 teams"
        },
        {
            award: "Final Judge (ESL)",
            comp: "Edinburgh Online Open Motions 2021",
            stats: "BP, 32 teams"
        },
        {
            award: "Gold Final Judge",
            comp: "Trinity Women and Gender Minorities' Open 2022",
            stats: "BP, 24 teams"
        },
        {
            award: "Finals Chair & Best Judge",
            comp: "Founders' Trophy 2021",
            stats: "BP, 42 teams"
        },
        {
            award: "Open Final Judge",
            comp: "Nusantara OVED 2021",
            stats: "BP, 74 teams"
        },
        {
            award: "Open Final Judge",
            comp: "Aurgumentum IV 2022",
            stats: "BP, 64 teams"
        },
        {
            award: "Final Judge (Novice)",
            comp: "Asian English Olympics 2022",
            stats: "BP, 90+ teams"
        },
        {
            award: "Open Final Judge",
            comp: "Christ University Parliamentary Debate 2022",
            stats: "AP, 38 teams"
        },
    ];

    return (
        <div className={'w-full space-y-4 overlay overflow-hidden h-48 relative'}>
            <div className="animate-credits absolute top-0 left-0 w-full">
                {achievements.map((e, i) => (
                    <DebateAchievement
                        key={`achievement-${i}`}
                        award={e.award}
                        comp={e.comp}
                        stats={e.stats}
                    />
                ))}
            </div>
            {/* Style for animation */}
            <style jsx>{`               
               .overlay {
                  --mask: linear-gradient(
                    to top,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0) 5%,
                    rgba(0, 0, 0, 1) 20%,
                    rgba(0, 0, 0, 1) 80%,
                    rgba(0, 0, 0, 0) 95%,
                    rgba(0, 0, 0, 0) 100%
                  ) bottom,
                  linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0) 5%,
                    rgba(0, 0, 0, 1) 20%,
                    rgba(0, 0, 0, 1) 80%,
                    rgba(0, 0, 0, 0) 95%,
                    rgba(0, 0, 0, 0) 100%
                  ) top;
                  -webkit-mask: var(--mask);
                  mask: var(--mask);
                }
               @keyframes credits {
                    0% { transform: translateY(20%); }
                    100% { transform: translateY(-100%); }
                }
                .animate-credits {
                    animation: credits 30s linear infinite;
                }
            `}</style>
        </div>
    );
}