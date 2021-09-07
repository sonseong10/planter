import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MessageForm from "../components/messages/message-form";
import Messages from "../components/messages/messages";
import SectionHeader from "../components/ui/section-header";
import MessageCRUD, { Message } from "../service/message";

type AllMessagesProps = {
  messageService: MessageCRUD;
};

const AllMessages = ({ messageService }: AllMessagesProps) => {
  const username = "";
  const history = useHistory();
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string>("");

  // TODO: CRUD 구현

  useEffect(() => {
    messageService
      .getMessages(username)
      .then((messages) => setMessages([...messages]))
      .catch(onError);
  }, [setMessages, messageService, username]);

  const onCreated = (message: Message) => {
    setMessages((messages) => [message, ...messages]);
  };

  const onUsernameClick = (message: Message): void =>
    history.push(`/${message.user.name}`);

  const onError = (error: any) => {
    setError(error.toString());
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <>
      <SectionHeader title={"Home"} icon={"sorte"} />
      <MessageForm
        messageService={messageService}
        onCreated={onCreated}
        onError={error}
      />
      <Messages
        username={username}
        messages={messages}
        onUsernameClick={onUsernameClick}
        error={error}
      />
    </>
  );
};

export default AllMessages;
