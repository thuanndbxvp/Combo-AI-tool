
import React from 'react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const Icon = tool.icon;
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 flex flex-col items-start hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} mb-6`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white">{tool.name}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{tool.description}</p>
      <div className="flex flex-col sm:flex-row gap-4 w-full mt-auto">
        <a
          href={`/tool/${tool.slug}`}
          className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-gray-200 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors duration-300"
        >
          Tìm hiểu thêm
        </a>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Truy cập Tool
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};
