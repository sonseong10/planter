import * as messageRepository from "../data/index.js";

export async function getMessages(req, res) {
  const username = req.query.username;
  const data = await (username
    ? messageRepository.getAllMessageByUser
    : messageRepository.getAllMessage);
  res.status(200).json(data);
}

export async function getMessage(req, res, next) {
  const uid = req.params.uid;
  const message = await messageRepository.getMessageById;
  if (message) {
    res.status(200).json(message);
  } else {
    res.status(404).json({ error: `Message uid(${uid}) not found 🤪` });
  }
}

export async function createMessage(req, res, next) {
  const { text, user } = req.body;
  const message = await messageRepository.postMessage(text, user);
  res.status(201).json(message);
}

export async function updateMessage(req, res, next) {
  const uid = req.params.uid;
  const text = req.body.text;

  const message = await messageRepository.putMessage(uid, text);
  if (message) {
    res.status(200).json(message);
  } else {
    res.status(404).json({ error: `Message uid(${uid}) not found 🤪` });
  }
}

export async function removeMessage(req, res, next) {
  const uid = req.params.uid;
  await messageRepository.deleteMessage(uid);
  res.sendStatus(204);
}
