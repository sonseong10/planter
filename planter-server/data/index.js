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

export const getAllMessage = () => messages;

export const getAllMessageByUser = () =>
  messages.filter((message) => message.user.name === username);

export const getMessageById = () =>
  messages.find((message) => message.uid === uid);

export const postMessage = (text, user) => {
  const message = {
    uid: Date.now().toString(),
    createdAt: new Date(),
    text,
    user,
  };
  return (messages = [message, ...messages]);
};

export const putMessage = (uid, text) => {
  const message = messages.find((message) => message.uid === uid);
  message ? (message.text = text) : undefined;
  return message;
};

export const deleteMessage = (uid) =>
  (messages = messages.filter((message) => message.uid !== uid));
