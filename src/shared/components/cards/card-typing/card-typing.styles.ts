import styled from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";
import { TypingAnimation } from "react-native-typing-animation";

import AvatarIconGPTSVG from "../../../../shared/assets/chatgpt.svg";

export const Container = styled.View`
  margin-bottom: ${RFValue(12)}px;
  flex-direction: row;
  align-items: center;
`;

export const GPTAvatarSVG = styled(AvatarIconGPTSVG)`
  height: ${RFValue(38)}px;
  width: ${RFValue(38)}px;

  margin-right: ${RFValue(10)}px;
`;

export const Animation = styled(TypingAnimation).attrs(({ theme }) => ({
  dotMargin: RFValue(3),
  dotAmplitude: RFValue(3),
  dotSpeed: 0.15,
  dotRadius: RFValue(2.5),
  dotX: RFValue(12),
  dotY: RFValue(6),
}))``;
