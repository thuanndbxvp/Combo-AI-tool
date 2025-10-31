
import React from 'react';
import type { Tool } from './types';
import { finderDetails } from './data/finderDetails';
import { analyzerDetails } from './data/analyzerDetails';
import { contentDetails } from './data/contentDetails';

const SearchIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ChartBarIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const LightBulbIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707.707M12 21v-1m0-16a8 8 0 100 16 8 8 0 000-16z" />
  </svg>
);

export const tools: Tool[] = [
  {
    id: 'finder',
    slug: 'niche-finder',
    name: 'Niche Finder',
    description: 'Tìm kiếm và phân tích sâu các thị trường ngách tiềm năng trên YouTube.',
    details: finderDetails,
    url: 'https://finder.studyai86.online',
    icon: SearchIcon,
    color: 'from-sky-500 to-cyan-400',
  },
  {
    id: 'analyzer',
    slug: 'channel-analyzer',
    name: 'Channel Analyzer',
    description: 'Phân tích chi tiết bất kỳ kênh YouTube nào để học hỏi chiến lược thành công.',
    details: analyzerDetails,
    url: 'https://analyzer.studyai86.online',
    icon: ChartBarIcon,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'content',
    slug: 'content-creator',
    name: 'Content Creator',
    description: 'Lên ý tưởng và tạo kịch bản video nhanh chóng với sự trợ giúp của AI.',
    details: contentDetails,
    url: 'https://content.studyai86.online',
    icon: LightBulbIcon,
    color: 'from-amber-500 to-yellow-400',
  },
];
