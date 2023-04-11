import chatgptService from "../../../services/chatgptService";

export const reviseMessage = async (message, instruction, setRevisedMessage) => {
  let prompt;

  switch(instruction) {
    case 'Default':
      prompt = 'Make this message sound clear, concise and professional.';
      break;
    case 'Understanding':
      prompt = 'This message is being sent to a frustrated person. Make it sound professional and understanding.';
      break;
    case 'Instructional':
      prompt = 'This message contains technical instructions. Make these instructions simple and easy to follow.';
      break;
    default:
      throw new Error('Invalid instruction value');
  }

  try {
    const result = await chatgptService.reviseMessage(message, prompt);
    setRevisedMessage(result);
    console.log({ prompt })
  } catch (error) {
    console.error("Error revising message: ", error);
  }
};