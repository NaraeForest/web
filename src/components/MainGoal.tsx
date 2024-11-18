import React from 'react';
import Link from "next/link";

interface MainGoalProps {
    name: string,
    progress: number,
}

export default function MainGoal({ name, progress }: MainGoalProps) {
    return (
        <Link href="/maingoalviewer">
            <div className="goalCard bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-lg font-semibold mb-2">{name}</h1>
                <div className="progressBar w-full bg-gray-300 rounded-full h-2 mb-2">
                    <div
                        className="progress bg-black h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-600">{progress}% of goals completed</p>
            </div>
        </Link>
    );
}
