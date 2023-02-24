import styled, { css } from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";
import Animated from "react-native-reanimated";

import { TextDefault } from "../../texts/text-default/text-default.component";

import AvatarIconGPTSVG from "../../../../shared/assets/chatgpt.svg";

type IsMessageProps = {
  isMessageMe?: boolean;
};

export const Container = styled(Animated.View)<IsMessageProps>`
  margin-bottom: ${RFValue(12)}px;
  flex-direction: row;
  align-items: flex-end;
  max-width: 100%;

  ${({ isMessageMe }) =>
    isMessageMe &&
    css`
      flex-direction: row-reverse;
      align-self: flex-end;
    `}
`;

export const ContentText = styled.View<IsMessageProps>`
  background-color: ${({ theme, isMessageMe }) =>
    isMessageMe ? theme.COLORS.PRIMARY_LIGHT : theme.COLORS.SHAPE};
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(6)}px;
  max-width: 85%;
`;

export const TextMessage = styled(TextDefault).attrs({
  type: "P1",
})``;

export const GPTAvatarSVG = styled(AvatarIconGPTSVG)<IsMessageProps>`
  height: ${RFValue(38)}px;
  width: ${RFValue(38)}px;

  margin-right: ${RFValue(10)}px;
`;
