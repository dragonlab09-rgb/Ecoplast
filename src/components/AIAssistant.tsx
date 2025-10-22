
import React, { useState, useRef, useEffect } from 'react';
import { askSafetyQuestion } from '../services/geminiService';
import { CloseIcon, SendIcon, UserCircleIcon, BotIcon } from './icons/Icons';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { sender: 'ai', text: 'Hola, soy tu asistente de seguridad. ¿Qué te gustaría saber sobre el Plan de Higiene y Seguridad de Ecoplast?' }
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await askSafetyQuestion(input);
      const aiMessage: Message = { sender: 'ai', text: aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = { sender: 'ai', text: 'Lo siento, hubo un error. Inténtalo de nuevo.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
      <div className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-lg h-[90vh] max-h-[700px] flex flex-col relative border border-slate-700">
        <header className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BotIcon /> Asistente de Seguridad IA
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <CloseIcon />
          </button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <BotIcon />
                </div>
              )}
              <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
              </div>
               {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                  <UserCircleIcon />
                </div>
              )}
            </div>
          ))}
           {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <BotIcon />
              </div>
              <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-slate-700 text-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                  </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <footer className="p-4 border-t border-slate-700">
          <div className="flex items-center bg-slate-700 rounded-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta sobre el plan..."
              className="w-full bg-transparent p-3 text-white focus:outline-none"
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || input.trim() === ''} className="p-3 text-slate-400 hover:text-white disabled:text-slate-600 disabled:cursor-not-allowed">
              <SendIcon />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AIAssistant;
