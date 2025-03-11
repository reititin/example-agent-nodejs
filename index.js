import { createApukoneClient } from '@reititin/client';
import ollama from 'ollama';
// Your Agent's ID
const AGENT_ID = "YOUR_AGENT_ID";
const OLLAMA_MODEL = "qwen2.5:3b";
const processMessage = async (data) => {
  const { message } = await ollama.chat({ model: OLLAMA_MODEL, messages: data });
  return message;
};
createApukoneClient({ agentId: AGENT_ID, onMessage: processMessage });