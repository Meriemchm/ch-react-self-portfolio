import { useState } from "react";
import rebot from "../../assets/Icons/rebot.gif";
import rebot_img from "../../assets/Icons/rebot.svg";
import times from "../../assets/Icons/times.svg";
import check from "../../assets/Icons/check.svg";

const ChatWindow = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `👋 Bonjour ! Je suis l’assistant IA de Meriem Chami. Je suis là pour vous renseigner sur ses projets, compétences et parcours. Posez-moi vos questions !`,
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Ajouter le message utilisateur
    const newMessages = [...messages, { from: "user", text: input.trim() }];
    setMessages(newMessages);
    setInput("");

    // Tu pourras ajouter ici l’appel API OpenAI et une réponse simulée
    setTimeout(() => {
       setMessages((prev) => [
         ...prev,
         { from: "bot", text: "Merci pour votre question ! Je vous réponds bientôt." },
       ]);
     }, 1000);
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
