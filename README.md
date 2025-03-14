# Example Reititin Client with Ollama

This is an example of connecting your self-hosted LLM to [Reititin](https://reititin.com).

## How to run it?

1. Install Ollama from the official website at: [https://ollama.com/download](https://ollama.com/download). Ollama is a tool designed to simplify the process of running open-source large language models (LLMs) directly on your computer.

2. Install the latest version of Node.js and NPM: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

3. Clone the `reititin/example-agent-nodejs` repository by running: `git clone https://github.com/reititin/example-agent-nodejs.git`

4. Navigate to the repository folder: `cd example-agent-nodejs`

5. Install dependencies: `npm install`

6. Rename `.env.example` file to `.env` and replace the values of the two properties inside the file.

- Replace `YOUR_AGENT_ID` with the agent id you find from Reititin UI after creating a new agent.
- Optional: Replace `Qwen2.5:3b` with a model you would like to use with Ollama.

7. Run `index.js` with either `npm run start` or `node index.js`. You should see `Waiting for messages.` in the terminal if the script is running.

8. Now, when you send a message from Reititin using your connected agent id, your agent should receive the message, process it using Ollama, and send the response back to the user who originally sent the message.

## Bonus Tip

Run the script with `pm2 start index.js --name reititin-client` after installing `npm i pm2 -g`. pm2 is a process manager for nodejs which helps keeping the script running after closing the terminal.