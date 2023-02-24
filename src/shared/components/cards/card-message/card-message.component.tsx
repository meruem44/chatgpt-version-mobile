import { Layout, FadeIn } from "react-native-reanimated";

import IconUser from "./modules/icon-user/icon-user.component";

import {
  Container,
  ContentText,
  TextMessage,
  GPTAvatarSVG,
} from "./card-message.styles";

type CardMessageProps = {
  data: MessageModel;
};

const CardMessage: React.FC<CardMessageProps> = ({ data }) => {
  const isMessageMe = data?.isMy;

  return (
    <Container
      layout={Layout.duration(200).delay(200)}
      entering={FadeIn}
      isMessageMe={isMessageMe}
    >
      {isMessageMe ? <IconUser /> : <GPTAvatarSVG />}

      <ContentText isMessageMe={isMessageMe}>
        <TextMessage>{data?.message?.trim()}</TextMessage>
      </ContentText>
    </Container>
  );
};

export { CardMessage };
