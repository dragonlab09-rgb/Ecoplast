
import { GoogleGenAI } from "@google/genai";
import { DOCUMENT_CONTENT } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development. In a real environment, the key should be set.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const askSafetyQuestion = async (question: string): Promise<string> => {
  if (!API_KEY) {
    return "Error: La clave de API para el servicio de IA no está configurada. Por favor, contacte al administrador.";
  }
  
  try {
    const systemInstruction = `Eres un asistente experto en el Plan de Higiene y Seguridad Industrial de Ecoplast. Tu única fuente de conocimiento es el documento que te proporciono a continuación. Responde las preguntas del usuario de manera clara, concisa y basándote exclusivamente en la información del documento. Si la respuesta no está en el documento, indica amablemente que no tienes esa información. No inventes datos. El idioma de la respuesta debe ser español.

    DOCUMENTO DE REFERENCIA:
    ---
    ${DOCUMENT_CONTENT}
    ---
    `;
    
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: question,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.2,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, ha ocurrido un error al procesar tu pregunta. Por favor, inténtalo de nuevo más tarde.";
  }
};
