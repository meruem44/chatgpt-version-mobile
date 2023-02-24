import { ReactNode, useCallback, useState } from "react";
import { createContext } from "use-context-selector";

import { useSendMessageChat } from "../../shared/hooks/clients/useSendMessageChat";

type MessagesContextData = {
  messages: MessageModel[];
  addNewMessage(message: MessageModel): void;
  isLoading: boolean;
};

const MessagesContext = createContext<MessagesContextData>(
  {} as MessagesContextData
);

type MessagesContextProviderProps = {
  children: ReactNode;
};

function MessagesContextProvider({ children }: MessagesContextProviderProps) {
  const { sendMessage } = useSendMessageChat();

  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addNewMessage = useCallback(async (message: MessageModel) => {
    setMessages((oldMessages) => [...oldMessages, message]);

    setIsLoading(true);

    await sendMessage({
      message: message?.message,
      onSuccess: onSuccessResponse,
    });

    setIsLoading(false);
  }, []);

  const onSuccessResponse = useCallback(async (responseText: string) => {
    const addResponse: MessageModel = {
      isMy: false,
      message: responseText,
    };

    setMessages((oldMessages) => [...oldMessages, addResponse]);
  }, []);

  return (
    <MessagesContext.Provider
      value={{
        messages,
        addNewMessage,
        isLoading,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

export { MessagesContextProvider, MessagesContext };
