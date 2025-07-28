import { useState } from "react";
import rebot from "../../assets/Icons/rebot.gif";
import ChatWindow from "./ChatWindow";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <ChatWindow onClose={() => setIsOpen(false)} />
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-third text-white p-2 rounded-full shadow-lg hover:scale-105 duration-200 transition-all"
          aria-label="Ouvrir le chat"
        >
          <img src={rebot} alt="rebot" className="w-16 h-16" />
        </button>
      )}
    </div>
  );
};

export default ChatBubble;
