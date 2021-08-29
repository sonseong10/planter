import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { css } from "@emotion/react"
import MessageCRUD, { Message } from "../../service/message"
import MessageCard from "./message-card"

type MessagesProps = {
  messageService: MessageCRUD
  username: string
  addable: boolean
}

const Messages = ({ messageService, username }: MessagesProps) => {
  const history = useHistory()
  const [messages, setMessages] = useState<Array<Message>>([])
  const [error, setError] = useState<string>("")

  useEffect(() => {
    messageService
      .getMessages(username)
      .then((messages) => setMessages([...messages]))
      .catch(onError)
  }, [setMessages, messageService, username])

  const onUsernameClick = (message: Message) =>
    history.push(`/${message.user.name}`)

  const onError = (error: any) => {
    setError(error.toString())
    setTimeout(() => {
      setError("")
    }, 3000)
  }

  return (
    <ul css={messageList}>
      {messages.map((message) => (
        <MessageCard
          key={message.uid}
          message={message}
          // TODO: CRUD 구현
          // owner={message.user.name}
          // onDelete={onDelete}
          // onUpdate={onUpdate}
          onUsernameClick={onUsernameClick}
        />
      ))}
      {error}
    </ul>
  )
}

const messageList = css`
  margin: 0;
  padding-left: 0;
  list-style: none;
`

export default Messages
