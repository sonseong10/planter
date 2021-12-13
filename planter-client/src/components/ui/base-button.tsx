import { css } from "@emotion/react";
import { resetButton } from "../../lib/styles/components/reset-button";
import palette from "../../lib/styles/constants/palette";

export type BaseButtonProps = {
  color?: string;
  hoverColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function BaseButton({
  color = palette.brandTheme.base,
  hoverColor = palette.brandTheme.dark,
  ...rest
}: BaseButtonProps) {
  return <button css={style(color, hoverColor)} {...rest}></button>;
}

const style = (color: string, hoverColor: string) => css`
  width: 36px;
  height: 36px;
  border-radius: 0.75rem;
  ${resetButton}
  background-color: ${color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
  &:hover,
  &:focus-visible {
    background: ${hoverColor};
  }
  &:focus-visible {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
`;

export default BaseButton;
