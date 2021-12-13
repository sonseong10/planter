import { css } from "@emotion/react";
// import { useAuth } from "../../context/AuthContext";
import { Message } from "../../service/message";
import MessageCard from "./message-card";

type MessagesProps = {
  messages: Message[];
  username: string;
  error: string;
  onUsernameClick: (message: Message) => void;
  onDelete: (tweetId: string) => {};
  onUpdate: any;
};

const Messages = ({
  username,
  error,
  messages,
  onUsernameClick,
  onDelete,
  onUpdate,
}: MessagesProps) => {
  // const { user, } = useAuth();
  return (
    <ul css={messageList}>
      {messages.map((message) => (
        <MessageCard
          key={message.uid}
          onDelete={onDelete}
          onUpdate={onUpdate}
          owner={message.user.name === username}
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
