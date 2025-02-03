import config from '@/utils/config';
import OpenAI from 'openai';
import { tools } from './tools';
import handleToolCalls from './handleToolCalls';

class AssistantAI {
  openai: OpenAI;
  assistantId: string;

  constructor() {
    this.openai = new OpenAI({ apiKey: config.openApiKey });
    this.assistantId = config.assistantId!;
  }

  async createAssistant(payload = {}) {
    try {
      const assistant = await this.openai.beta.assistants.create(payload as any);
      return {
        err: false,
        data: assistant,
      };
    } catch (error) {
      return this.handleErrors(error, 'createAssistant');
    }
  }

  async createThread(payload = {}) {
    try {
      const thread = await this.openai.beta.threads.create(payload);

      return {
        err: false,
        data: thread,
      };
    } catch (error) {
      return this.handleErrors(error, 'createThread');
    }
  }

  async runThread(threadId, payload = {}) {
    try {
      const thread = await this.openai.beta.threads.runs.create(threadId, payload as any);
      return {
        err: false,
        data: thread,
      };
    } catch (error) {
      return this.handleErrors(error, 'runThread');
    }
  }

  async retrieveThread(id) {
    try {
      const thread = await this.openai.beta.threads.retrieve(id);
      return {
        err: false,
        data: thread,
      };
    } catch (error) {
      return this.handleErrors(error, 'retrieveThread');
    }
  }

  async retrieveRun(threadId, runId) {
    try {
      const thread = await this.openai.beta.threads.runs.retrieve(threadId, runId);
      return {
        err: false,
        data: thread,
      };
    } catch (error) {
      return this.handleErrors(error, 'retrieveRun');
    }
  }

  async submitToolOutputs(threadId, runId, payload = {}) {
    try {
      const thread = await this.openai.beta.threads.runs.submitToolOutputs(
        threadId,
        runId,
        payload as any
      );
      return {
        err: false,
        data: thread,
      };
    } catch (error) {
      return this.handleErrors(error, 'submitToolOutputs');
    }
  }

  async createMessages(threadId, payload = {}) {
    try {
      const messages = await this.openai.beta.threads.messages.create(threadId, payload as any);
      return {
        err: false,
        data: messages,
      };
    } catch (error) {
      return this.handleErrors(error, 'createMessages');
    }
  }

  async retrieveMessages(threadId, query = { limit: 100 }) {
    try {
      const formattedMessage: any = { err: false, data: [] };

      const fetchMessages = async (threadId, query) => {
        const messages: any = await this.openai.beta.threads.messages.list(threadId, query);
        const tempMessage: any = messages.data.map((message) => {
          const content = message.content.map((data) => data[data.type].value);
          return { id: message.id, role: message.role, content };
        });

        formattedMessage.data.push(...tempMessage);
        if (messages.body.has_more) {
          await fetchMessages(threadId, {
            after: messages.body.last_id,
            query: query.limit || 100,
          });
        }
      };

      await fetchMessages(threadId, query);

      return formattedMessage;
    } catch (error) {
      return this.handleErrors(error, 'retrieveMessages');
    }
  }

  async listRunSteps(threadId, runId) {
    try {
      const runSteps = await this.openai.beta.threads.runs.steps.list(threadId, runId);
      return {
        err: false,
        data: runSteps.data,
      };
    } catch (error) {
      return this.handleErrors(error, 'listRunSteps');
    }
  }

  async generateImage(prompt) {
    try {
      const images = await this.openai.images.generate({ model: 'dall-e-3', prompt });
      const urls = images.data.map((image) => image.url);
      return {
        err: false,
        data: urls,
      };
    } catch (error) {
      return this.handleErrors(error, 'generateImage');
    }
  }

  handleErrors(error, errorFrom = 'assistantAPI') {
    console.log(error);
    return {
      err: true,
      message: error.code || `Something went wrong in ${errorFrom}`,
    };
  }

  async generate(prompt) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an AI assistant to run CRUD operation in  MongoDB database. ',
          },
          { role: 'user', content: prompt },
        ],
        tools: tools() as any,
      });

      let result = [];
      const toolCalls = completion?.choices?.[0]?.message?.tool_calls;

      if (toolCalls) {
        result = await handleToolCalls(toolCalls[0]);
      }

      return result;
    } catch (error) {
      throw new Error('Please add a related prompt');
    }
  }
}

const assistantAI = new AssistantAI();
export default assistantAI;
