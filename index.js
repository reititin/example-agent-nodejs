import { ReititinClient } from '@reititin/client';
import ollama from 'ollama';
// Your Agent's ID
const AGENT_ID = process.env.AGENT_ID || "default-agent-id";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen2.5:3b";
const processMessage = async (data) => {
  const { message } = await ollama.chat({ model: OLLAMA_MODEL, messages: data });
  return message;
};
ReititinClient({ agentId: AGENT_ID, onMessage: processMessage });