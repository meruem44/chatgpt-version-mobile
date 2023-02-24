import styled from "styled-components/native";
import { ActivityIndicator, TextInput } from "react-native";
import { RFValue } from "../../../../../../shared/libs/responsive-fontsize";

import { Ionicons } from "@expo/vector-icons";
import { ButtonVoid } from "../../../../../../shared/components/buttons/button-void/button-void.component";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  flex-direction: row;
  align-items: flex-end;
  max-height: ${RFValue(160)}px;
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
`;

export const LoadInput = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: "small",
  color: theme.COLORS.PRIMARY,
}))``;

export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  overflow-y: scroll;
`;

export const IconSend = styled(Ionicons).attrs(({ theme }) => ({
  name: "ios-send",
  size: RFValue(22),
}))``;

export const ButtonIcon = styled(ButtonVoid)`
  margin-left: ${RFValue(12)}px;
`;
