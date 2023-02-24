import { useContextSelector } from "use-context-selector";
import { MessagesContext } from "../../contexts/messages.context";

export function useAddMessage() {
  const addNewMessage = useContextSelector(
    MessagesContext,
    (context) => context.addNewMessage
  );

  return {
    addNewMessage,
  };
}
