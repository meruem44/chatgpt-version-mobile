import styled, { css } from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";

export type TextType = "H1" | "P1" | "D1";

type TextProps = {
  type: TextType;
};

export const Text = styled.Text<TextProps>`
  ${({ theme, type }) =>
    type === "H1" &&
    css`
      color: ${theme.COLORS.CAPTION_BASE};
      font-size: ${RFValue(22)}px;
      font-family: ${({ theme }) => theme.FONTS.BOLD};
    `}

  ${({ theme, type }) =>
    type === "P1" &&
    css`
      color: ${theme.COLORS.TEXT_DEFAULT};
      font-size: ${RFValue(16)}px;
      font-family: ${({ theme }) => theme.FONTS.REGULAR};
    `}
`;
