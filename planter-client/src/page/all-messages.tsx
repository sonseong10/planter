import Messages from "../components/messages/messages"
import MessageCRUD from "../service/message"

type AllMessagesProps = {
  messageService: MessageCRUD
}

const AllMessages = ({ messageService }: AllMessagesProps) => {
  const username = ""
  return (
    <Messages
      messageService={messageService}
      addable={true}
      username={username}
    />
  )
}

export default AllMessages
