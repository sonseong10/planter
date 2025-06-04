import { Request, Response, NextFunction } from "express";
import * as messageRepository from "../data/index";

export async function getMessages(
  req: Request,
  res: Response,
  _: NextFunction
) {
  try {
    const username = req.query.username;
    let data;

    if (username) {
      data = await messageRepository.getAllMessageByUser(username.toString());
    } else {
      data = await messageRepository.getAllMessage();
    }

    // console.log("username:", username);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "메시지를 불러오는 중 에러가 발생했습니다." });
  }
}

export async function getMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const uid = req.params.uid;
    const message = await messageRepository.getMessageById(uid);

    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ error: `Message uid(${uid}) not found 🤪` });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export async function createMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { text, user } = req.body;
    const message = await messageRepository.postMessage(text, user);
    res.status(201).json(message);
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export async function updateMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const uid = req.params.uid;
    const text = req.body.text;

    const message = await messageRepository.putMessage(uid, text);

    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ error: `Message uid(${uid}) not found 🤪` });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export async function removeMessage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const uid = req.params.uid;
    await messageRepository.deleteMessage(uid);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    next(err);
  }
}
