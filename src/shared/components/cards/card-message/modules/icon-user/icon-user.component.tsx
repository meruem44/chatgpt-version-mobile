import { RFValue } from "../../../../../libs/responsive-fontsize";
import { useTheme } from "styled-components/native";

import { AntDesign } from "@expo/vector-icons";

import { Container } from "./icon-user.styles";

const IconUser: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <AntDesign color={COLORS.CAPTION_BASE} name="user" size={RFValue(18)} />
    </Container>
  );
};

export default IconUser;
