import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export const PromoNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification every 5 minutes (300,000 ms)
    const interval = setInterval(() => {
      setIsVisible(true);
      
      // Auto-hide after 15 seconds to be less intrusive?
      // Or keep it until closed?
      // The requirement says "doesn't affect other work", so auto-hide is safer.
      // But let's keep it visible until closed or for a longer duration (e.g. 30s)
      // to ensure the user sees it.
      setTimeout(() => {
        setIsVisible(false);
      }, 15000); 
    }, 300000); // 5 minutes

    // Also show once after a short delay on mount (e.g. 1 min) or immediately?
    // The requirement says "timer 5 mins show once".
    // I'll stick to the interval.
    // Maybe show the first one after 5 minutes? Or immediately?
    // Usually notifications show up after some usage.
    // I'll start the timer on mount, so first show is after 5 mins.
    
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl p-4 max-w-sm w-full pointer-events-auto relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
            
            <div className="pr-6">
              <h4 className="text-sm font-bold text-white mb-2 font-outfit">
                Gợi ý công cụ hữu ích
              </h4>
              
              <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                Chúng tôi có tool ghép tạo video từ ảnh/video khớp lời thoại với Audio, Voice chạy tới đâu là Ảnh/video hiển thị tới đó.
              </p>
              
              <a
                href="https://www.ai86.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Mời các bạn tham khảo: AI86.Pro
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
