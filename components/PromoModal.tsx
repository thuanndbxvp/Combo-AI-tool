import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export const PromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on mount after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="p-6 pt-12 text-center">
              <h3 className="text-xl font-bold text-white mb-4 font-outfit">
                Gợi ý công cụ hữu ích
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Chúng tôi có tool ghép tạo video từ ảnh/video khớp lời thoại với Audio, Voice chạy tới đâu là Ảnh/video hiển thị tới đó.
              </p>
              
              <a
                href="https://www.ai86.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
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
