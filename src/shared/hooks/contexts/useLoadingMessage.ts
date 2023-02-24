import { useContextSelector } from "use-context-selector";
import { MessagesContext } from "../../contexts/messages.context";

export function useLoadingMessage() {
  const isLoading = useContextSelector(
    MessagesContext,
    (context) => context.isLoading
  );

  return {
    isLoading,
  };
}
