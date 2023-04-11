import chatgptService from "../../../services/chatgptService";

export const reviseMessage = async (message, instruction, setRevisedMessage) => {
  try {
    const result = await chatgptService.reviseMessage(message, instruction);
    setRevisedMessage(result);
  } catch (error) {
    console.error("Error revising message: ", error);
  }
};