
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
      <section className="pt-20 pb-6 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
            <StudyAI86Logo className="w-16 md:w-20" />
            <h1 className="font-outfit text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 py-2">
              Elevate Your YouTube Channel
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá, phân tích và sáng tạo nội dung hiệu quả hơn bao giờ hết với bộ công cụ AI chuyên nghiệp từ <span className="font-bold text-white">StudyAI86</span>.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="pt-6 pb-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Bộ Công Cụ Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool: Tool) => (
              <ToolCard key={tool.id} tool={tool} onShowDetails={onShowDetails} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};