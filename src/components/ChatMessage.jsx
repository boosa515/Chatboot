import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  // Função para formatar o texto (Transforma **texto** em negrito)
  const formatMessage = (text) => {
    // Se não houver texto, retorna nada
    if (!text) return null;

    // Divide o texto onde houver **
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Remove os asteriscos e coloca dentro da tag strong (negrito)
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    !chat.hideInChat && (
      <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>
        {chat.role === "model" && <ChatbotIcon />}
        {/* Aqui usamos a função formatMessage em vez de exibir o texto direto */}
        <p className="message-text">{formatMessage(chat.text)}</p>
      </div>
    )
  );
};

export default ChatMessage;