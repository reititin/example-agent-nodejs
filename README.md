# Example Reititin Client with Ollama

This is an example of connecting your self-hosted LLM to [Reititin](https://reititin.com).

## How to run it?

1. Install Ollama from the official website at: [https://ollama.com/download](https://ollama.com/download). Ollama is a tool designed to simplify the process of running open-source large language models (LLMs) directly on your computer.

2. Install the latest version of Node.js and NPM: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

3. Clone the `reititin/example-agent-nodejs` repository by running: `git clone https://github.com/reititin/example-agent-nodejs.git`

4. Navigate to the repository folder: `cd example-agent-nodejs`

5. Install dependencies: `npm install`

6. You have a couple of options to run the script and replace the two variables that need to be changed:

- 1. Replace `YOUR_AGENT_ID` and `YOUR_OLLAMA_MODEL` from `package.json` start-script and run `npm run start`
- 2. Create a `.env` -file with `AGENT_ID` and `OLLAMA_MODEL` propertied with your defined values.
- 3. Pass the variables directly with node -script: `AGENT_ID='YOUR_AGENT_ID' OLLAMA_MODEL='YOUR_OLLAMA_MODEL' node index.js`

7. The client should now be running and you should see `Waiting for messages.` in the terminal.
