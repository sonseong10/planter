import { css, Theme } from "@emotion/react";
import { FormEvent } from "react";
import axios from "axios";

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

function Login(): JSX.Element {
  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("email");
    const password = formData.get("password");
    console.log(name, password);
    const params = {
      email: "name",
      password: "password",
    };

    axios
      .post("http://localhost:8080/api/auth/login", params, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res));
  };
  return (
    <>
      <div
        css={css`
          background-color: #f4f6f8;
          height: 100dvh;
        `}
      >
        <div css={container}>
          <h1 css={logo}>{"Planter".toUpperCase()}</h1>
          <form className="auth-form" onSubmit={onLogin}>
            <input
              name="email"
              type="email"
              placeholder="test@test.com"
              css={input}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              css={input}
              required
            />
            <button
              type="submit"
              css={css`
                ${button}
                border: 0;
                background: linear-gradient(45deg, #61f21d 0%, #53ed93 100%);
              `}
            >
              로그인
            </button>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 10px 0;
                /* border-bottom: 1px solid #8c8c8c; */
                box-sizing: border-box;

                button {
                  border: none;
                  background-color: transparent;
                  color: #8c8c8c;
                  cursor: pointer;
                  transition: opacity 0.2s ease-in-out;

                  &:hover {
                    opacity: 0.6;
                  }
                }
              `}
            >
              <button type="button">회원가입</button>
              <button type="button">아이디찾기</button>
              <button type="button">비밀번호찾기</button>
            </div>
          </form>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default Login;
