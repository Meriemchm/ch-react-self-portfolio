import rebot from "../../assets/Icons/rebot.gif";
import rebot_img from "../../assets/Icons/rebot.svg";
import times from "../../assets/Icons/times.svg";

const ChatWindow = ({ onClose }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg w-full h-full md:w-96 md:h-[35rem] flex flex-col overflow-hidden border">
      {/* Header */}
      <div className="bg-second  flex items-center justify-between px-4 py-2">
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
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="flex items-start gap-2 mb-4">
          <div className="rounded-full bg-second p-1">
            <img src={rebot_img} alt="bot" className="" />
          </div>

          <div className="bg-white border p-3 rounded-xl text-sm shadow-md">
            👋 Bonjour ! Je suis l’assistant IA de Meriem Chami. Je suis là pour
            vous renseigner sur ses projets, compétences et parcours. Posez-moi
            vos questions !
          </div>
        </div>
        {/* Tu peux afficher les messages ici plus tard */}
      </div>

      {/* Input */}
      <div className="p-2 border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button className="bg-primary hover:scale-105 duration-200 text-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
