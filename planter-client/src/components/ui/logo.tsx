import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import palette from "../../lib/styles/constants/palette";

type LogoProps = {
  size?: string;
};

const Logo = (_: LogoProps) => {
  return (
    <div css={logo}>
      <Link to="/">
        <img src={logoImg} alt="planter" />
      </Link>
    </div>
  );
};

const logo = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  transition: background-color 200ms ease-in-out;

  :hover {
    background-color: ${palette.opacity.brand};
  }

  img {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Logo;
