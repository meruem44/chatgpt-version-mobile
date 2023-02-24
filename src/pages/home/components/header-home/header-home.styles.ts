import styled from "styled-components/native";
import { RFValue } from "../../../../shared/libs/responsive-fontsize";

import LogoGPTSvg from "../../../../shared/assets/chatgpt.svg";
import { TextDefault } from "../../../../shared/components/texts/text-default/text-default.component";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(70)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  padding: 0px ${RFValue(18)}px;
  flex-direction: row;
  align-items: center;
`;

export const GPTIcon = styled(LogoGPTSvg)`
  height: ${RFValue(44)}px;
  width: ${RFValue(44)}px;
  margin-right: ${RFValue(12)}px;
`;

export const ContentText = styled.View``;

export const TextLoading = styled(TextDefault)``;
