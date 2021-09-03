import { css } from "@emotion/react";
import { Message } from "../../service/message";
import MessageCard from "./message-card";

type MessagesProps = {
  messages: Message[];
  username: string;
  error: string;
  onUsernameClick: (message: Message) => void;
};

const Messages = ({
  username,
  error,
  messages,
  onUsernameClick,
}: MessagesProps) => {
  return (
    <ul css={messageList}>
      {messages.map((message) => (
        <MessageCard
          key={message.uid}
          message={message}
          onUsernameClick={onUsernameClick}
        />
      ))}
      {/* {error} */}
    </ul>
  );
};

const messageList = css`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

export default Messages;
