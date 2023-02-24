import { useContextSelector } from "use-context-selector";
import { MessagesContext } from "../../contexts/messages.context";

export function useMessageList() {
  const messages = useContextSelector(
    MessagesContext,
    (context) => context.messages
  );

  return {
    messages,
  };
}
