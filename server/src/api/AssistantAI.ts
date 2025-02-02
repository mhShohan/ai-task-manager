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

// async function chatWithDeepSeek() {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "qwen2.5:0.5b",
//       messages: [
//         { role: "system", content: "You are an AI that strictly responds in valid JSON format." },
//         { role: "user", content: "Generate a JavaScript function to reverse a string and return in JSON format." }
//       ],
//       temperature: 0.7,
//     });

//     console.log(response.choices[0].message);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
