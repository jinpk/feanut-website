import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 12px;
  padding: 0.3125em 0.8125em;
  font-size: 0.75em;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
`;
