import { css } from "@emotion/react";
import React, { memo } from "react";
import palette from "../../lib/styles/constants/palette";

type AvatarProps = {
  url?: string | undefined;
  name: string;
};

const Avatar = memo(({ url, name }: AvatarProps) => (
  <div css={avatar}>
    {!!url ? (
      <img src={url} alt="avatar" className="avatar-img" />
    ) : (
      <div className="avatar-txt">{name.charAt(0)}</div>
    )}
  </div>
));

export default Avatar;

const avatar = css`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    width: 100%;
    height: 40px;
    background-color: ${palette.gray[200]};
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    text-align: center;
  }
`;
