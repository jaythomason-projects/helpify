import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.REACT_APP_CHATGPT_API_KEY;
console.log("API key: ", apiKey);

if (!apiKey) {
  throw new Error("API key is not set in the .env file")
}

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const chatgptService = {
  async reviseMessage (message, instruction) {
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: `You are a helpful assistant that revises the user's message based on the following instruction: ${instruction} 
          Return only the revised message, starting with 'Hello' and ending with 'Regards'`},
          { role: "user", content: message },
        ],
        temperature: 0.6,
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error revising message using ChatGPT: ", error);
      throw error;
    }
  },
};

export default chatgptService;