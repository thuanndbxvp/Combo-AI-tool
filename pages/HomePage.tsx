import React from 'react';
import { ToolCard } from '../components/ToolCard';
import type { Tool } from '../types';
import { tools } from '../constants';
import { StudyAI86Logo } from '../components/Logo';

interface HomePageProps {
  onShowDetails: (tool: Tool) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onShowDetails }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-1 pb-1 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-1">
            <StudyAI86Logo className="w-16 md:w-20" />
            <h1 className="font-outfit text-4xl md:text-6xl font-extrabold tracking-tight flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 py-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Elevate Your
              </span>
              <svg
                aria-label="YouTube"
                role="img"
                className="h-[0.7em] w-auto inline-block flex-shrink-0"
                viewBox="0 0 28.5 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                    <linearGradient id="youtubeIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
                <path d="M27.973 3.123A3.59 3.59 0 0 0 25.42 0.57C23.18 0 14.25 0 14.25 0S5.32 0 2.08 0.57a3.59 3.59 0 0 0-2.553 2.553C0 5.32 0 10 0 10s0 4.68 0.57 6.877a3.59 3.59 0 0 0 2.553 2.553C5.32 20 14.25 20 14.25 20s8.93 0 11.17-0.57a3.59 3.59 0 0 0 2.553-2.553C28.5 14.68 28.5 10 28.5 10s0-4.68-0.527-6.877z" fill="url(#youtubeIconGradient)"></path>
                <path d="m11.4 14.286 7.429-4.286-7.429-4.286v8.572z" fill="#FFFFFF"></path>
              </svg>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Channel
              </span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá, phân tích và sáng tạo nội dung hiệu quả hơn bao giờ hết
            <br />
            với bộ công cụ AI chuyên nghiệp từ <span className="font-bold text-white">StudyAI86</span>.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="pt-8 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tools.map((tool: Tool) => (
              <ToolCard key={tool.id} tool={tool} onShowDetails={onShowDetails} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};