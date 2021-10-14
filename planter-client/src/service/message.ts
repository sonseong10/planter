export interface MessageCRUD {
  getMessages(username: string): Promise<Message[]>;
  postMessage(text: string): Promise<Message[]>;
  deleteMessage(MessageId: string): Promise<void>;
  updateMessage(MessageId: string, text: string): Promise<Message[]>;
}

export interface Message {
  uid: number | string;
  text: string;
  createdAt: string;
  user: UserInfo;
}

interface UserInfo {
  name: string;
  nickname: string;
  url?: string | undefined;
}

export default class MessageService implements MessageCRUD {
  constructor(private readonly baseURL: string) {
    this.baseURL = baseURL;
  }

  async getMessages(username: string): Promise<Message[]> {
    const query: string = username ? `?username=${username}` : "";
    const response = await fetch(`${this.baseURL}/${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error();
    }
    return data;
  }

  async postMessage(text: string): Promise<Message[]> {
    const response = await fetch(`${this.baseURL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        user: {
          name: "anna",
          nickname: "anna",
          url: "",
        },
      }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.error);
    }
    return data;
  }

  async deleteMessage(messageId: string): Promise<void> {
    const response = await fetch(`${this.baseURL}/${messageId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 204) {
      throw new Error();
    }
  }

  async updateMessage(messageId: string, text: string): Promise<Message[]> {
    const response = await fetch(`${this.baseURL}/${messageId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.error);
    }
    return data;
  }
}
