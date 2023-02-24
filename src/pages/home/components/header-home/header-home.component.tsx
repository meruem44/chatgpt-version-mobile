import { useLoadingMessage } from "../../../../shared/hooks/contexts/useLoadingMessage";

import { TextDefault } from "../../../../shared/components/texts/text-default/text-default.component";

import {
  Container,
  GPTIcon,
  ContentText,
  TextLoading,
} from "./header-home.styles";

const HeaderHome: React.FC = () => {
  const { isLoading } = useLoadingMessage();

  return (
    <Container>
      <GPTIcon />
      <ContentText>
        <TextDefault type="H1">ChatGPT</TextDefault>

        {isLoading && <TextLoading type="P1">Digitando ...</TextLoading>}
      </ContentText>
    </Container>
  );
};

export { HeaderHome };
