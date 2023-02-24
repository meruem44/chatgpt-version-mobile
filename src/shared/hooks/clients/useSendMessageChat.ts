import { useCallback } from "react";
import { openai } from "../../libs/openai";

type SendMessageParams = {
  onSuccess(response: string): void;
  message: string;
};

export function useSendMessageChat() {
  const sendMessage = useCallback(
    async ({ message, onSuccess }: SendMessageParams) => {
      try {
        const completion = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: message,
          temperature: 0,
          max_tokens: 60,
          top_p: 1,
          frequency_penalty: 0.5,
          presence_penalty: 0,
        });

        onSuccess(completion?.data?.choices?.[0]?.text);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return {
    sendMessage,
  };
}
