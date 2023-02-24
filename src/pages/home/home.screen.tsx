import { FooterHome } from "./components/footer-home/footer-home.component";
import { HeaderHome } from "./components/header-home/header-home.component";
import { ListMessages } from "./components/list-messages/list-messages.component";

import { Container, SafeArea } from "./home.styles";

const Home: React.FC = () => {
  return (
    <SafeArea>
      <Container>
        <HeaderHome />
        <ListMessages />
        <FooterHome />
      </Container>
    </SafeArea>
  );
};

export { Home };
