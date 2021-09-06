import express from "express"
import "express-async-error"

let messages = [
  {
    uid: "1",
    text: "test",
    createdAt: Date.now().toString(),
    user: {
      name: "anna",
      nickname: "anna",
      url: "https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png",
    },
  },
  {
    uid: "2",
    text: "test",
    createdAt: Date.now().toString(),
    user: {
      name: "bob",
      nickname: "bob",
      url: "https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png",
    },
  },
]
const router = express.Router()

// NOTE: GET
// 1. 전체 메시지 조회
// 2. 아이디별 메시지 조회
router.get("/", (req, res, next) => {
  const username = req.query.username
  const data = username
    ? messages.filter((message) => message.user.name === username)
    : messages
  res.status(200).json(data)
})
// 3. 게시글 아이디 조회
router.get("/:uid", (req, res, next) => {
  const uid = req.params.uid
  const message = messages.find((message) => message.uid === uid)
  if (message) {
    res.status(200).json(message)
  } else {
    res.status(404).json({ error: `Message uid(${uid}) not found 🤪` })
  }
})
// NOTE: POST
// 1. 게시물 생성
router.post("/", (req, res, next) => {
  const { text, user } = req.body
  const message = {
    uid: Date.now().toString(),
    createdAt: new Date(),
    text,
    user,
  }
  messages = [message, ...messages]
  res.status(201).json(message)
})

// NOTE: PATCH
router.put("/:uid", (req, res, next) => {
  const uid = req.params.uid
  const text = req.body.text

  const message = messages.find((message) => message.uid === uid)
  if (message) {
    message.text = text
    res.status(200).json(message)
  } else {
    res.status(404).json({ error: `Message uid(${uid}) not found 🤪` })
  }
})

// NOTE: DELETE
router.delete("/:uid", (req, res, next) => {
  const uid = req.params.uid
  messages = messages.filter((message) => message.uid !== uid)
  res.sendStatus(204)
})
export default router
