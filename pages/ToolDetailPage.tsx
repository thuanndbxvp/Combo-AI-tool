
import React from 'react';
import type { Tool } from '../types';
import { Link } from '../components/Link';

interface ToolDetailPageProps {
  tool: Tool;
}

const DetailRenderer: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n').filter(line => line.trim() !== '');

  const renderLine = (line: string, index: number) => {
    const trimmed = line.trim();

    // Main Title (first line)
    if (index === 0) {
      return <h2 key={index} className="text-3xl font-bold text-white mb-6 pb-4 border-b border-gray-600">{trimmed}</h2>;
    }

    // Numbered Headings (e.g., "1. Title Here")
    if (/^\d+\./.test(trimmed)) {
      return <h3 key={index} className="text-2xl font-bold text-white mb-4 mt-8">{trimmed}</h3>;
    }

    // Emoji-prefixed items
    const emojiMatch = trimmed.match(/^([📈💰⚔️⏳])\s/);
    if (emojiMatch) {
      const [fullMatch, emoji] = emojiMatch;
      return (
        <div key={index} className="flex items-start my-4 pl-4">
          <span className="text-2xl mr-4 mt-1">{emoji}</span>
          <p className="flex-1">{trimmed.substring(fullMatch.length)}</p>
        </div>
      );
    }

    // Sub-items with a colon (e.g., "Some Title: Some text...")
    if (trimmed.includes(':') && trimmed.length < 200 && !trimmed.startsWith('http')) {
      const parts = trimmed.split(/:(.*)/s);
      return (
        <p key={index} className="my-3 pl-4">
          <strong className="text-blue-400">{parts[0]}:</strong>
          <span> {parts[1]}</span>
        </p>
      );
    }
    
    // Default paragraph
    return <p key={index} className="my-4">{trimmed}</p>;
  };

  return (
    <div className="text-gray-300 leading-relaxed">
      {lines.map(renderLine)}
    </div>
  );
};

export const ToolDetailPage: React.FC<ToolDetailPageProps> = ({ tool }) => {
    const Icon = tool.icon;
    return (
        <div className="container mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center mb-16">
                <Link to="/" className={`inline-block p-4 rounded-xl bg-gradient-to-br ${tool.color} mb-6 transition-transform duration-300 hover:scale-110`}>
                    <Icon className="h-12 w-12 text-white" />
                </Link>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
                    {tool.name}
                </h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">{tool.description}</p>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 md:p-12">
                <DetailRenderer content={tool.details} />
            </div>

            <div className="text-center mt-16">
                <Link to="/" className="inline-flex items-center px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Quay Lại Trang Chủ
                </Link>
            </div>
             <style>{`
                @keyframes animate-fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: animate-fade-in 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
