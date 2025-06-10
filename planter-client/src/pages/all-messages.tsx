import { useEffect, useState } from "react";
import MessageForm from "../components/messages/message-form";
import Messages from "../components/messages/messages";
import SectionHeader from "../components/ui/section-header";
import MessageCRUD, { Message } from "../service/message";

type AllMessagesProps = {
  messageService: MessageCRUD;
};

const AllMessages = ({ messageService }: AllMessagesProps) => {
  const username = "anna";
  const [messages, setMessages] = useState<any>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    messageService
      .getMessages(username)
      .then((messages) => setMessages([...messages]))
      .catch(onError);
  }, [setMessages, messageService, username]);

  const onCreated = (message: Message) => {
    setMessages((messages: any) => [message, ...messages]);
  };

  const onDelete = (tweetId: string) =>
    messageService
      .deleteMessage(tweetId)
      .then(() =>
        setMessages((messages: any[]) =>
          messages.filter((message) => message.uid !== tweetId)
        )
      )
      .catch((error) => setError(error.toString()));

  const onUpdate = (tweetId: string, text: string) =>
    messageService
      .updateMessage(tweetId, text)
      .then((updated) =>
        setMessages((messages: any[]) =>
          messages.map((item) => (item.id === updated.uid ? updated : item))
        )
      )
      .catch((error) => error.toString());

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
        onUsernameClick={() => {
          console.log("hi");
        }}
        error={error}
      />
    </>
  );
};

export default AllMessages;
