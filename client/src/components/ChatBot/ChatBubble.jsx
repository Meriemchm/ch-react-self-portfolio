import { useState, useEffect } from "react";
import rebot from "../../assets/Icons/rebot.gif";
import ChatWindow from "./ChatWindow";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [welcomeOpacity, setWelcomeOpacity] = useState(1);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setWelcomeOpacity(0);
      const hideTimer = setTimeout(() => {
        setWelcomeVisible(false);
      }, 300);
      return () => clearTimeout(hideTimer);
    }, 5000);

    return () => clearTimeout(fadeOutTimer);
  }, []);

  return (
    <div className="fixed bottom-10 right-4 md:bottom-6 md:right-6 z-50">
      {isOpen ? (
        <ChatWindow onClose={() => setIsOpen(false)} />
      ) : (
        <div className="flex flex-col items-end gap-2">
          {welcomeVisible && (
            <div
              className="bg-white p-3 rounded-lg shadow-lg max-w-xs transition-opacity duration-300 ease-out"
              style={{ opacity: welcomeOpacity }}
            >
              <p className="text-gray-800 text-sm">
                Need help? Click here to chat! 
              </p>
            </div>
          )}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-third text-white p-2 rounded-full shadow-lg hover:scale-105 duration-200 transition-all"
            aria-label="Ouvrir le chat"
          >
            <img
              src={rebot}
              alt="rebot"
              className="md:w-16 md:h-16 w-12 h-12"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
