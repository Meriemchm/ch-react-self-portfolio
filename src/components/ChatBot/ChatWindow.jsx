import { useState } from "react";
import rebot from "../../assets/Icons/rebot.gif";
import rebot_img from "../../assets/Icons/rebot.svg";
import times from "../../assets/Icons/times.svg";
import check from "../../assets/Icons/check.svg";
import Waiting from "../../assets/Icons/Waiting.gif";

const ChatWindow = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `👋 Hello! I'm Meriem Chami's AI assistant. I'm here to provide information about her projects, skills, and background. Feel free to ask me any questions!`,
    },
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, newUserMessage]);
    const question = input.trim();
    setInput("");

    // Message temporaire "..." pendant que l'IA réfléchit
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: <img src={Waiting} alt="waiting" className="w-8 h-4"/>
       },
    ]);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      // Retire le message "..." et ajoute la vraie réponse
      setMessages((prev) => [
        ...prev.slice(0, -1), // enlève "..."
        { from: "bot", text: data.answer },
      ]);
    } catch (error) {
      console.error("Erreur :", error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          from: "bot",
          text: "An error occurred. Please try again later.",
        },
      ]);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg w-full h-96 md:w-96 md:h-[35rem] flex flex-col overflow-hidden border m-2 md:m-0">
      {/* Header */}
      <div className="bg-second flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img src={rebot} alt="bot" className="w-10 h-10" />
          <h3 className="font-semibold">Meriem AI Assistant</h3>
        </div>
        <button onClick={onClose}>
          <img
            src={times}
            alt="close"
            className="w-8 h-8 opacity-80 hover:opacity-100"
          />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${
              msg.from === "user" ? "justify-end" : ""
            }`}
          >
            {msg.from === "bot" && (
              <div className="rounded-full bg-second p-1">
                <img src={rebot_img} alt="bot" className="w-6 h-6" />
              </div>
            )}

            <div
              className={`p-3 rounded-xl text-sm shadow-md max-w-[70%] ${
                msg.from === "bot"
                  ? "bg-white border text-gray-700"
                  : "bg-primary text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-2 border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-primary hover:scale-105 duration-200 text-white p-2 rounded-full"
        >
          <img src={check} alt="check-icon" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
