import { BedrockAgentCoreApp } from 'bedrock-agentcore/runtime';
import { Agent } from '@strands-agents/sdk';

// Create a Strands agent
const agent = new Agent();

// Create and start the server
const app = new BedrockAgentCoreApp({
	invocationHandler: {
		process: async (payload, context) => {
			const prompt = (payload as { prompt?: string }).prompt ?? 'Hello!';
			console.log(`Session ${context.sessionId} - Received prompt:`, prompt);

			const result = await agent.invoke(prompt);
			return result;
		}
	}
});

app.run();
