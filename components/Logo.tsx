import React from 'react';

export const StudyAI86Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-1 ${className}`}>
            <svg
                className="w-full h-auto flex-shrink-0"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#60a5fa' }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
                    </linearGradient>
                </defs>
                <path
                    stroke="url(#logoGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 30 L50 15 L80 30 V 70 L50 85 L20 70 Z M20 30 L50 45 L80 30 M50 85 V 45"
                />
                <circle cx="50" cy="45" r="5" fill="url(#logoGradient)" />
            </svg>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 whitespace-nowrap text-center text-sm md:text-base -mt-1">
                StudyAI86
            </span>
        </div>
    );
};
