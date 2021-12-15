import {
  postMessage,
  deleteMessage,
  getAllMessage,
  getAllMessageByUser,
  getMessageById,
  putMessage,
} from "../data/index.js";

export const getMessages = (req, res) => {
  const username = req.query.username;
  const data = username ? getAllMessageByUser : getAllMessage;
  res.status(200).json(data);
};

export const getMessage = (req, res, next) => {
  const uid = req.params.uid;
  const message = getMessageById;
  if (message) {
    res.status(200).json(message);
  } else {
    res.status(404).json({ error: `Message uid(${uid}) not found 🤪` });
  }
};

export const createMessage = (req, res, next) => {
  const { text, user } = req.body;
  postMessage(text, user);
  res.status(201).json(message);
};

export const updateMessage = (req, res, next) => {
  const uid = req.params.uid;
  const text = req.body.text;

  const message = putMessage(uid, text);
  if (message) {
    res.status(200).json(message);
  } else {
    res.status(404).json({ error: `Message uid(${uid}) not found 🤪` });
  }
};

export const removeMessage = (req, res, next) => {
  const uid = req.params.uid;
  deleteMessage(uid);
  res.sendStatus(204);
};
