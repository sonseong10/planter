import { Message } from "../../service/message";
import { css } from "@emotion/react";
import palette from "../../lib/styles/constants/palette";
import Avatar from "../ui/avatar";
import parseDate from "../../util/date";
import { useState } from "react";
import EditMessageForm from "./EditMessageForm";
import { resetButton } from "../../lib/styles/components/reset-button";

type MessageCardProps = {
  message: Message;
  onUsernameClick: (message: Message) => void;
  owner: any;
  onDelete: (id: any) => {};
  onUpdate: any;
};

const MessageCard = ({
  message,
  onUsernameClick,
  owner,
  onDelete,
  onUpdate,
}: MessageCardProps) => {
  const { user, createdAt, text } = message;
  const [editing, setEditing] = useState(false);
  const onClose = () => setEditing(false);

  return (
    <li css={listItem}>
      <section css={messageCard}>
        <header css={header}>
          <Avatar url={user.url} name={user.name} />
        </header>

        <div css={body}>
          <address onClick={() => onUsernameClick(message)}>
            <strong>{user.name}</strong>
            <span>@{user.nickname}</span>
            <span css={timeStamp}>{parseDate(createdAt)}</span>
          </address>
          <p>{text}</p>
          {editing && (
            <EditMessageForm
              message={message}
              onUpdate={onUpdate}
              onClose={onClose}
            />
          )}
        </div>
      </section>
      {owner && (
        <div css={messageAction}>
          <button onClick={() => onDelete(message.uid)}>x</button>
          <button onClick={() => setEditing(!editing)}>✎</button>
        </div>
      )}
    </li>
  );
};

const listItem = css`
  display: flex;
  border-bottom: 1px solid ${palette.border};
  padding: 12px 12px 0;
`;

const messageCard = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
`;

const header = css`
  flex-basis: 48px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 12px;
`;

const body = css`
  flex: 1;
  address {
    font-style: normal;

    strong,
    span {
      font-size: 14px;
      line-height: 20px;
      overflow-wrap: break-word;
      cursor: pointer;
    }

    &:hover {
      text-decoration: underline;
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
`;

const timeStamp = css`
  margin-left: 4px;
`;

const messageAction = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  button {
    ${resetButton}
    width: 40px;
    height: 40px;
    font-size: 16px;
    color: ${palette.text.secondary};
    transition: color 300ms ease-in-out;
    outline: none;

    &:hover:enabled {
      color: ${palette.brandTheme.dark};
    }
  }
`;

export default MessageCard;
