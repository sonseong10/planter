import express from "express";
import "express-async-error";

import {
  createMessage,
  deleteMessage,
  getAllMessage,
  getAllMessageByUser,
  getMessageById,
  updateMessage,
} from "../data/index.js";

const router = express.Router();

// NOTE: GET
// 1. 전체 메시지 조회
// 2. 아이디별 메시지 조회
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username ? getAllMessageByUser : getAllMessage;
  res.status(200).json(data);
});
// 3. 게시글 아이디 조회
router.get("/:uid", (req, res, next) => {
  const uid = req.params.uid;
  const message = getMessageById;
  if (message) {
    res.status(200).json(message);
  } else {
    res.status(404).json({ error: `Message uid(${uid}) not found 🤪` });
  }
});
// NOTE: POST
// 1. 게시물 생성
router.post("/", (req, res, next) => {
  const { text, user } = req.body;
  createMessage(text, user);
  res.status(201).json(message);
});

// NOTE: PATCH
router.put("/:uid", (req, res, next) => {
  const uid = req.params.uid;
  const text = req.body.text;

  const message = updateMessage(uid, text);
  if (message) {
    res.status(200).json(message);
  } else {
    res.status(404).json({ error: `Message uid(${uid}) not found 🤪` });
  }
});

// NOTE: DELETE
router.delete("/:uid", (req, res, next) => {
  const uid = req.params.uid;
  deleteMessage(uid);
  res.sendStatus(204);
});
export default router;
