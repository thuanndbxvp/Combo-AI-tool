
import React, { useEffect } from 'react';
import type { Tool } from '../types';

interface ModalProps {
  tool: Tool | null;
  onClose: () => void;
}

const DetailRenderer: React.FC<{ content: string }> = ({ content }) => {
    const lines = content.split('\n').filter(line => line.trim() !== '');

    const renderLine = (line: string, index: number) => {
        const trimmed = line.trim();

        if (index === 0) {
            return <h2 key={index} className="text-3xl font-bold text-white mb-6 pb-4 border-b border-gray-600">{trimmed}</h2>;
        }

        if (/^\d+\./.test(trimmed)) {
            return <h3 key={index} className="text-2xl font-bold text-white mb-4 mt-8">{trimmed}</h3>;
        }
        
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

        if (trimmed.includes(':') && trimmed.length < 200 && !trimmed.startsWith('http')) {
            const parts = trimmed.split(/:(.*)/s);
            return (
                <p key={index} className="my-3 pl-4">
                <strong className="text-blue-400">{parts[0]}:</strong>
                <span> {parts[1]}</span>
                </p>
            );
        }
        
        return <p key={index} className="my-4">{trimmed}</p>;
    };

    return (
        <div className="text-gray-300 leading-relaxed">
        {lines.map(renderLine)}
        </div>
    );
};


export const Modal: React.FC<ModalProps> = ({ tool, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!tool) return null;

  const Icon = tool.icon;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-gray-800/80 border border-gray-700 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col transform transition-transform duration-300 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-gray-800/80 rounded-t-xl z-10">
           <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color}`}>
                    <Icon className="h-8 w-8 text-white" />
                </div>
                <h2 id="modal-title" className="text-2xl font-bold text-white">{tool.name}</h2>
           </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <main className="p-8 md:p-10 overflow-y-auto">
          <DetailRenderer content={tool.details} />
        </main>
      </div>
       <style>{`
            @keyframes animate-fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes animate-slide-up {
                from { opacity: 0; transform: translateY(30px) scale(0.98); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-fade-in {
                animation: animate-fade-in 0.3s ease-out forwards;
            }
            .animate-slide-up {
                animation: animate-slide-up 0.4s ease-out forwards;
            }
        `}</style>
    </div>
  );
};
