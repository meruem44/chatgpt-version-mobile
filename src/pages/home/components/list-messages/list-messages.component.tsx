import { useMessageList } from "../../../../shared/hooks/contexts/useMessageList";

import { CardMessage } from "../../../../shared/components/cards/card-message/card-message.component";
import { CardTyping } from "../../../../shared/components/cards/card-typing/card-typing.component";

import { Container, List } from "./list-messages.styles";

const ListMessages: React.FC = () => {
  const { messages } = useMessageList();

  return (
    <Container>
      <List
        data={messages}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <CardMessage data={item} />}
      />
    </Container>
  );
};

export { ListMessages };
