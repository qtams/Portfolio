import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all"
        >
          💬
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fixed bottom-20 right-6 w-72 sm:w-80 bg-white text-black rounded-xl shadow-xl z-50 overflow-hidden"
          >
            <div className="bg-blue-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
              <span>Chatbot</span>
              <button onClick={() => setIsOpen(false)}>✖</button>
            </div>
            <div className="p-4 text-sm h-48 overflow-y-auto">
              <p>Hello! How can I help you today?</p>
              {/* You can expand with real chat logic here */}
            </div>
            <div className="border-t p-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full px-3 py-2 border rounded focus:outline-none text-sm"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FloatingChatbot;
