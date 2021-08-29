import { Message } from "../../service/message"
import { css } from "@emotion/react"
import palette from "../../lib/styles/constants/palette"

type MessageCardProps = {
  message: Message
  onUsernameClick: (message: Message) => void
}

const MessageCard = ({ message, onUsernameClick }: MessageCardProps) => {
  const { user, createdAt, text } = message

  return (
    <li css={listItem}>
      <section css={messageCard}>
        <header css={header}>
          <div css={profile}>
            <img src={user.url} alt={`${user.name}님 프로필`} />
          </div>
        </header>

        <div css={body}>
          <address onClick={() => onUsernameClick(message)}>
            <strong>{user.name}</strong>
            <span>@{user.nickname}</span>
            <span>{createdAt}</span>
          </address>
          <p>{text}</p>
        </div>
      </section>
    </li>
  )
}

const listItem = css`
  border-bottom: 1px solid ${palette.border};
  padding: 12px 12px 0;
`

const messageCard = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const header = css`
  flex-basis: 48px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 12px;
`
const profile = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const body = css`
  address {
    font-style: normal;

    strong,
    span {
      font-size: 14px;
      line-height: 20px;
      overflow-wrap: break-word;
    }
    strong {
      margin-right: 4px;
      font-weight: 400;
      color: ${palette.text.primary};
    }

    span {
      color: ${palette.text.secondary};
    }
  }
`

export default MessageCard
