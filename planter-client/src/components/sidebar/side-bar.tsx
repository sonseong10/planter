import { css } from "@emotion/react";
import media from "../../lib/styles/constants/media";
import Logo from "../ui/logo";

type SideBarProps = {};

const SideBar = (_: SideBarProps) => {
  return (
    <div css={sideBarStyle}>
      <Logo />

      <ul css={menuStyle}></ul>
    </div>
  );
};

const sideBarStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${media.xlarge} {
    display: none;
  }
`;

const menuStyle = css`
  list-style: none;
  padding: 0;
  margin-top: 5.625rem;
  margin-left: -1rem;
  flex: 1;
`;
export default SideBar;
