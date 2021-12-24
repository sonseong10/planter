export let messages = [
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
];

export async function getAllMessage() {
  return messages;
}

export async function getAllMessageByUser() {
  return messages.filter((message) => message.user.name === username);
}

export async function getMessageById() {
  return messages.find((message) => message.uid === uid);
}

export async function postMessage(text, user) {
  const message = {
    uid: Date.now().toString(),
    createdAt: new Date(),
    text,
    user,
  };
  messages = [message, ...messages];
  return messages;
}

export async function putMessage(uid, text) {
  const message = messages.find((message) => message.uid === uid);
  message ? (message.text = text) : undefined;
  return message;
}

export async function deleteMessage(uid) {
  return (messages = messages.filter((message) => message.uid !== uid));
}
