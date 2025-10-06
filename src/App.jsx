import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { companyInfo } from "./companyInfo";
import logo from "./img/img.png";

/* ====================================================== */
/* HOOK PARA ANIMAÇÃO DE SCROLL                           */
/* ====================================================== */
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        } else {
          entry.target.classList.remove("section-visible");
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll(".section-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);
};

/* ====================================================== */
/* COMPONENTES DAS NOVAS SEÇÕES                           */
/* ====================================================== */
const SpecialtyCoffees = () => (
  <section className="content-section specialty-coffees section-hidden">
    <h2 className="section-title">Nossos Cafés Especiais</h2>
    <p className="section-subtitle">
      Cada grão conta uma história. Selecionamos os melhores cafés de origens únicas para uma experiência inesquecível.
    </p>
    <div className="coffees-grid">
      <div className="coffee-card">
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop" alt="Café Geisha do Panamá" />
        <h3>Geisha do Panamá</h3>
        <p>Um dos cafés mais premiados do mundo, com notas florais de jasmim, bergamota e frutas tropicais. Uma verdadeira joia em forma de café.</p>
      </div>
      <div className="coffee-card">
        <img src="https://i.pinimg.com/736x/1f/c1/20/1fc120a418bf09fd4e5793b01c83383d.jpg" alt="Yirgacheffe da Etiópia" />
        <h3>Yirgacheffe da Etiópia</h3>
        <p>Conhecido como o berço do café, este grão etíope oferece uma acidez cítrica brilhante com notas de limão, mirtilo e um corpo leve e sedoso.</p>
      </div>
      <div className="coffee-card">
        <img src="https://i.pinimg.com/736x/22/41/4f/22414fb07746b5159e2c6d858c9d9dd7.jpg" alt="Bourbon Amarelo do Brasil" />
        <h3>Bourbon Amarelo do Brasil</h3>
        <p>Um clássico brasileiro que encanta pela sua doçura. Apresenta notas de caramelo, nozes e um final suave e achocolatado.</p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="content-section testimonials section-hidden">
    <h2 className="section-title">O que Nossos Clientes Dizem</h2>
    <div className="testimonials-grid">
      <div className="testimonial-card">
        <p className="quote">"O melhor café que já tomei! O ambiente é incrível e o atendimento é impecável. O chatbot me ajudou a escolher a bebida do dia e foi uma surpresa deliciosa."</p>
        <p className="author">- Julia S.</p>
      </div>
      <div className="testimonial-card">
        <p className="quote">"A funcionalidade de gerar imagens pelo chat é fantástica! Pedi um 'capuccino nas montanhas ao amanhecer' e o resultado foi lindo. Muito criativo!"</p>
        <p className="author">- Marcos P.</p>
      </div>
    </div>
  </section>
);

const Gallery = () => {
    const imageUrls = [
      'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop',
    ];
  
    return (
      <section className="content-section gallery-section section-hidden">
        <h2 className="section-title">Nossa Casa</h2>
        <p className="section-subtitle">Um espaço pensado para os amantes de café. Aconchegante, moderno e sempre pronto para te receber.</p>
        <div className="gallery-grid">
          {imageUrls.map((url, index) => (
            <div key={index} className="gallery-item">
              <img src={url} alt={`Foto da cafeteria ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const body = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`;
        // Esta linha cria o link que abre o cliente de e-mail 
        const mailtoLink = `mailto:rezendepiresgabriel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        // Abre o link
        window.location.href = mailtoLink;
    };

    return (
        <section className="content-section contact-section section-hidden">
            <h2 className="section-title">Entre em Contato</h2>
            <p className="section-subtitle">Estamos sempre prontos para atendê-lo. Venha nos visitar ou entre em contato conosco.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group form-group-full">
                    <label htmlFor="subject">Assunto</label>
                    <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} />
                </div>
                <div className="form-group form-group-full">
                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="submit-btn">Enviar Mensagem</button>
            </form>
        </section>
    );
};
  
const Footer = () => (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3 className="footer-title">Aroma Beans</h3>
          <p>Despertando seus sentidos com os melhores cafés especiais. Uma experiência única em cada xícara.</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Links Rápidos</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Cardápio</a></li>
            <li><a href="#">Galeria</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Contato</h3>
          <p>Rua das Flores, 123 - Centro</p>
          <p>(11) 98765-4321</p>
          <p>contato@aromabeanscoffe.com</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Horário</h3>
          <p><strong>Segunda - Sexta</strong>: 7h às 22h</p>
          <p><strong>Sábado</strong>: 8h às 20h</p>
          <p><strong>Domingo</strong>: 8h às 20h</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Aroma Beans Coffee. Todos os direitos reservados.</p>
      </div>
    </footer>
);

/* ====================================================== */
/* COMPONENTE PRINCIPAL                                   */
/* ====================================================== */
const App = () => {
  useScrollAnimation();
  const chatBodyRef = useRef();
  const [showChatbot, setShowChatbot] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [audio, setAudio] = useState({ playing: false, source: null, id: null });

  const initialColors = {
    background: 'rgba(15, 10, 5, 0.7)',
    text: '#FFFFFF',
    aboutBackground: 'rgba(15, 10, 5, 0.7)',
    aboutText: '#FFFFFF',
  };
  const [siteColors, setSiteColors] = useState(initialColors);

  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: "model", text: companyInfo },
  ]);

  const stopAudio = () => {
    if (audio.source) {
      audio.source.stop();
    }
    setAudio({ playing: false, source: null, id: null });
  };
  
  const playAudio = async (text, id) => {
    if (audio.playing && audio.id === id) {
      stopAudio();
      return;
    }
    if (audio.playing) {
      stopAudio();
    }
  
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-tts:generateContent?key=${API_KEY}`;
  
    const payload = {
      model: "gemini-1.5-flash-tts",
      contents: [{ parts: [{ text: `Diga com uma voz calma e amigável: ${text}` }] }],
      generationConfig: { responseModalities: ["AUDIO"] },
    };
  
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error("Falha ao gerar áudio.");
      
      const result = await response.json();
      const audioData = result.candidates[0].content.parts[0].inlineData.data;
      
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const audioBuffer = await audioContext.decodeAudioData(
        Uint8Array.from(atob(audioData), c => c.charCodeAt(0)).buffer
      );
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start(0);
      source.onended = () => setAudio({ playing: false, source: null, id: null });
  
      setAudio({ playing: true, source, id });
  
    } catch (error) {
      console.error("Erro no Text-to-Speech:", error);
    }
  };

  const handleQuickAction = (prompt, isUserVisible = true) => {
    if (isTyping) return;
    setHasInteracted(true);
    
    let fullPrompt = prompt;
    if (prompt.toLowerCase().includes("sugestão do dia")) {
      fullPrompt = `Aja como um barista criativo. Invente um nome e uma receita para uma bebida de café especial. Responda apenas com o nome da bebida em negrito, seguido da descrição.`;
    } else if (prompt.toLowerCase().includes("poema sobre café")) {
      fullPrompt = `Escreva um poema curto e elegante de 4 linhas sobre café.`;
    } else if (prompt.toLowerCase().includes("imagem de um café")) {
      fullPrompt = `Gere uma imagem de um café aconchegante.`;
    }

    if (isUserVisible) {
      setChatHistory(prev => [...prev, { role: "user", text: prompt, id: Date.now() }]);
    }
    const historyWithPrompt = [...chatHistory, { role: "user", text: fullPrompt, id: Date.now() + 1 }];
    generateBotResponse(historyWithPrompt);
  };

  const generateBotResponse = async (history) => {
    setIsTyping(true);
    stopAudio();

    const updateHistory = (newPart) => {
      setChatHistory((prev) => [...prev, { ...newPart, id: Date.now() }]);
    };
    
    const cleanHistory = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: cleanHistory }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      if (!response.ok) throw new Error("API Error");
      const data = await response.json();
      const apiResponseText = data.candidates[0].content.parts[0].text.trim();

      const jsonMatch = apiResponseText.match(/(\[.*\]|\{.*\})/s);

      if (jsonMatch) {
        try {
          const parsedJson = JSON.parse(jsonMatch[0]);
          const commands = Array.isArray(parsedJson) ? parsedJson : [parsedJson];
          let actionTaken = false;

          for (const command of commands) {
            if (command.action === 'generate_image_prompt') {
              actionTaken = true;
              updateHistory({ role: "model", text: "Claro! Criando uma imagem com base nisso...", isLoadingImage: true });
              
              const imagePrompt = `fotografia cinematográfica, luz suave, alta definição, 8k, ${command.prompt}`;
              
              const imageApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-image-preview:generateContent?key=${API_KEY}`;
              const imagePayload = {
                  contents: [{ parts: [{ text: imagePrompt }] }],
                  generationConfig: { responseModalities: ['IMAGE'] },
              };
              
              const imageResponse = await fetch(imageApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(imagePayload)
              });

              if (!imageResponse.ok) throw new Error("Falha ao gerar imagem.");
              const imageData = await imageResponse.json();
              const base64Data = imageData.candidates[0].content.parts.find(p => p.inlineData).inlineData.data;
              const imageUrl = `data:image/png;base64,${base64Data}`;
              
              setChatHistory(prev => prev.map(msg => msg.isLoadingImage ? { ...msg, isLoadingImage: false, imageUrl } : msg));
              break; 
            }
          }
          if (!actionTaken) updateHistory({ role: "model", text: apiResponseText });
        } catch (e) {
          updateHistory({ role: "model", text: apiResponseText });
        }
      } else {
        updateHistory({ role: "model", text: apiResponseText.replace(/\*\*(.*?)\*\*/g, "$1") });
      }
    } catch (error) {
      updateHistory({ role: "model", text: error.message, isError: true });
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory, isTyping]);

  return (
    <>
      <div className="main-layout" style={{ '--about-background-color': siteColors.background, '--about-text-color': siteColors.text }}>
        <div className="top-bar">
          <img src={logo} alt="Logo da Cafeteria" className="logo-image" />
        </div>
        <div className="about-section">
          <h1 className="main-title">Aroma Beans Coffee</h1>
          <p className="subtitle">Onde cada xícara é uma experiência. Converse com nosso assistente virtual para explorar nosso mundo ou personalizar sua visita.</p>
          <div className="features-container">
            <div className="feature-item">
              <span className="material-symbols-rounded">support_agent</span>
              <h3>Assistente Virtual</h3>
              <p>Tire dúvidas sobre nosso cardápio, horários e muito mais.</p>
            </div>
            <div className="feature-item">
              <span className="material-symbols-rounded">imagesmode</span>
              <h3>Crie com IA</h3>
              <p>Peça ao nosso bot para gerar imagens e poemas sobre café.</p>
            </div>
            <div className="feature-item">
              <span className="material-symbols-rounded">palette</span>
              <h3>Personalize a Página</h3>
              <p>Altere as cores do site conversando com o nosso assistente.</p>
            </div>
          </div>
        </div>
      </div>
      
      <SpecialtyCoffees />
      <Testimonials />
      <Gallery />
      <ContactForm />
      <Footer />

      <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
        <button onClick={() => setShowChatbot(p => !p)} id="chatbot-toggler">
          <span className="material-symbols-rounded">mode_comment</span>
          <span className="material-symbols-rounded">close</span>
        </button>
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="logo-text">Chatbot</h2>
            </div>
            <button onClick={() => setShowChatbot(p => !p)} className="material-symbols-rounded">
              keyboard_arrow_down
            </button>
          </div>
          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">Olá! 👋 <br /> Como posso te ajudar hoje?</p>
            </div>
            {!hasInteracted && (
              <div className="quick-actions-container">
                <p>Experimente estas ações:</p>
                <div className="buttons-wrapper">
                    <button onClick={() => handleQuickAction("Qual a sugestão do dia?")}><span className="material-symbols-rounded">local_cafe</span>Sugestão do Dia</button>
                    <button onClick={() => handleQuickAction("Crie um poema sobre café")}><span className="material-symbols-rounded">edit</span>Poema sobre Café</button>
                    <button onClick={() => handleQuickAction("Gere uma imagem de um café")}><span className="material-symbols-rounded">image</span>Imagem de Café</button>
                </div>
              </div>
            )}
            {chatHistory.map((chat) => (
              !chat.hideInChat && (
                <ChatMessage 
                  key={chat.id} 
                  chat={chat} 
                  onPlayAudio={playAudio} 
                  isAudioPlaying={audio.playing && audio.id === chat.id}
                />
              )
            ))}
            {isTyping && <div className="message bot-message"><ChatbotIcon /><div className="loading-spinner"></div></div>}
          </div>
          <div className="chat-footer">
            <ChatForm
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
              isLoading={isTyping}
              onNewMessage={() => setHasInteracted(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

