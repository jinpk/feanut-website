import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 12px;
  padding: 0.3125em 0.8125em;
  font-family: ${(props) => props.theme.fonts.pretendar.medium};
  font-size: 0.75em;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
`;

export const StyledButtonMedium = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.pretendar.medium};
  border: none;
  border-radius: 20px;
  padding: 0.8125em 1.875em;
  font-size: 0.875em;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
`;

export const StyledButtonMediumWhite = styled(StyledButtonMedium)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
`;
