import { css } from "@emotion/react";
import { button, container, input, logo } from "./style";
import { useLogin } from "./hook";

function Login(): JSX.Element {
  const onLogin = useLogin();

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
