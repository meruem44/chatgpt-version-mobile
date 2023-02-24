import styled from "styled-components/native";
import { RFValue } from "../../../../../libs/responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(38)}px;
  width: ${RFValue(38)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
  margin-left: ${RFValue(10)}px;
  justify-content: center;
  align-items: center;
`;
