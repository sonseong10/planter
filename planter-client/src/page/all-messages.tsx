import React from "react"
import MessageForm from "../components/messages/message-form"
import Messages from "../components/messages/messages"
import SectionHeader from "../components/ui/section-header"
import MessageCRUD from "../service/message"

type AllMessagesProps = {
  messageService: MessageCRUD
}

const AllMessages = ({ messageService }: AllMessagesProps) => {
  const username = ""
  return (
    <>
      <SectionHeader title={"Home"} icon={"sorte"} />
      <MessageForm />
      <Messages
        messageService={messageService}
        addable={true}
        username={username}
      />
    </>
  )
}

export default AllMessages
