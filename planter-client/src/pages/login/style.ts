import { css, Theme } from "@emotion/react";

const container = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  display: "block",
  padding: "40px",
  width: "300px",
  background: "#fff",
  borderRadius: "12px",
  transform: "translate(-50%,-50%)",
});

const input = css({
  display: "block",
  marginBottom: "8px",
  padding: "4px 12px",
  height: "48px",
  width: "100%",
  border: "1px solid #c8c8c8",
  borderRadius: "8px",
  fontSize: "14px",
  boxSizing: "border-box",
});

const button = css({
  display: "block",
  marginBottom: "16px",
  padding: "8px 10px",
  width: "100%",
  height: "48px",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "700",
  cursor: "pointer",
  transition: " opacity 0.2s ease-in-out",
  [`&:hover`]: {
    opacity: "0.6",
  },
});

const logo = (theme: Theme) =>
  css`
    text-align: center;
    background: linear-gradient(
      to right,
      ${theme.colors.brand} 0%,
      #53ed93 100%
    );
    background-clip: text;
    color: transparent;
    font-weight: 700;
    font-size: 42px;
  `;

export { container, input, logo, button };
