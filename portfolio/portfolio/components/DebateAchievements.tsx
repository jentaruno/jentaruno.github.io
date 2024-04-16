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
            award: "Open Final Judge",
            comp: "Uhuru Worlds 2022",
            stats: "BP, 180+ teams"
        },
        {
            award: "Finals Chair & Best Judge",
            comp: "Founders' Trophy 2021",
            stats: "BP, 42 teams"
        },
    ];

    return (
        <div className={'w-full space-y-4 overflow-hidden h-48 relative'}>
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
                @keyframes credits {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-100%); }
                }
                .animate-credits {
                    animation: credits 30s linear infinite;
                }
            `}</style>
        </div>
    );
}

// TODO: smooth when loop back to start
// TODO: include more achievements
// TODO: fade effect at top and bottom