import { ReititinClient } from '@reititin/client';
import ollama from 'ollama';

const processMessage = async (data) => {
  const { message } = await ollama.chat({ model: process.env.OLLAMA_MODEL, messages: data });
  return message;
};

ReititinClient({ agentId: process.env.AGENT_ID, onMessage: processMessage });