import { atom } from "jotai";

export type User = {
  id: string;
  name: string;
  email: string;
};

export const userAtom = atom<User | null>(null); // null이면 비로그인 상태
