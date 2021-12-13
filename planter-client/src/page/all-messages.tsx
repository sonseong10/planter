import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MessageForm from "../components/messages/message-form";
import Messages from "../components/messages/messages";
import SectionHeader from "../components/ui/section-header";
import { useAuth } from "../context/AuthContext";
import MessageCRUD, { Message } from "../service/message";

type AllMessagesProps = {
  messageService: MessageCRUD;
};

const AllMessages = ({ messageService }: AllMessagesProps) => {
  // const { user } = useAuth();
  const username = "anna";
  const history = useHistory();
  const [messages, setMessages] = useState<any>([]);
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

  const onDelete = (tweetId: string) =>
    messageService
      .deleteMessage(tweetId)
      .then(() =>
        setMessages((messages) =>
          messages.filter((message) => message.uid !== tweetId)
        )
      )
      .catch((error) => setError(error.toString()));

  const onUpdate = (tweetId: string, text: string) =>
    messageService
      .updateMessage(tweetId, text)
      .then((updated) =>
        setMessages((messages) =>
          messages.map((item) => (item.id === updated.uid ? updated : item))
        )
      )
      .catch((error) => error.toString());

  const onUsernameClick = (message: Message) =>
    history.push(`/${message.user.name}`);

  const onError = (error: string) => {
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
        onError={onError}
      />
      <Messages
        onDelete={onDelete}
        onUpdate={onUpdate}
        username={username}
        messages={messages}
        onUsernameClick={onUsernameClick}
        error={error}
      />
    </>
  );
};

export default AllMessages;
