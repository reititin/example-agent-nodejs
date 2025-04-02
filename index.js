import { ReititinClient } from '@reititin/client';
import ollama from 'ollama';
import 'dotenv/config';

const processMessage = async (data) => {
  const { message } = await ollama.chat({ model: process.env.OLLAMA_MODEL, messages: data });
  return message;
};

ReititinClient({host: process.env.HOST, token: process.env.TOKEN, onMessage: processMessage });