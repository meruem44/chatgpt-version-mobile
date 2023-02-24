import { FlatList } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(18)}px;
`;

export const List = styled(FlatList)``;
