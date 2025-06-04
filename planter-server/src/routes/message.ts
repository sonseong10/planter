import express from "express";
import "express-async-error";
import {
  getMessages,
  getMessage,
  createMessage,
  updateMessage,
  removeMessage,
} from "../controller/index";

const router = express.Router();

// NOTE: GET
// 1. 전체 메시지 조회
// 2. 아이디별 메시지 조회
router.get("/", getMessages);

// 3. 게시글 아이디 조회
router.get("/:uid", getMessage);

// NOTE: POST
// 1. 게시물 생성
router.post("/", createMessage);

// NOTE: PATCH
router.put("/:uid", updateMessage);

// NOTE: DELETE
router.delete("/:uid", removeMessage);

export default router;
