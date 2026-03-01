
import React from 'react';
import type { Tool } from './types';
import { finderDetails } from './data/finderDetails';
import { analyzerDetails } from './data/analyzerDetails';
import { contentDetails } from './data/contentDetails';
import { ttsDetails } from './data/ttsDetails';
import { storyDetails } from './data/storyDetails';
import { scriptAdapterDetails } from './data/scriptAdapterDetails';

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

const SpeakerWaveIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </svg>
);

const BookOpenIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const FilmIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export const tools: Tool[] = [
  {
    id: 'script-adapter',
    slug: 'script-adapter',
    name: 'Script Adapter',
    description: 'Biến kịch bản thành video dễ như chơi với nhân vật đồng nhất.',
    details: scriptAdapterDetails,
    url: 'https://vip.studyai.click/',
    icon: FilmIcon,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'finder',
    slug: 'niche-finder',
    name: 'Niche Finder',
    description: 'Tìm kiếm và phân tích sâu các thị trường ngách tiềm năng trên YouTube.',
    details: finderDetails,
    url: 'https://z.studyai86.online/#',
    icon: SearchIcon,
    color: 'from-sky-500 to-cyan-400',
  },
  {
    id: 'analyzer',
    slug: 'channel-analyzer',
    name: 'Channel Analyzer',
    description: 'Phân tích chi tiết bất kỳ kênh YouTube nào để học hỏi chiến lược thành công.',
    details: analyzerDetails,
    url: 'https://x.studyai86.online/#',
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
  {
    id: 'tts',
    slug: 'text-to-speech',
    name: 'Text to Speech Converter',
    description: 'Chuyển đổi văn bản hoặc tệp .txt thành giọng nói chất lượng cao với nhiều tùy chọn giọng đọc.',
    details: ttsDetails,
    url: 'https://tts.studyai.click/',
    icon: SpeakerWaveIcon,
    color: 'from-green-500 to-teal-400',
  },
  {
    id: 'story',
    slug: 'story-writer',
    name: 'AI Story Writer',
    description: 'Sáng tạo cốt truyện, xây dựng nhân vật và viết tiểu thuyết hấp dẫn với sự hỗ trợ của AI.',
    details: storyDetails,
    url: 'https://s.studyai.click/',
    icon: BookOpenIcon,
    color: 'from-pink-500 to-rose-400',
  },
];
