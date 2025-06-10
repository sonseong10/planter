import { FormEvent } from "react";
import { HTTP } from "../../utils/HTTP";
import { useAtom } from "jotai";
import { User, userAtom } from "../../stores/atoms/auth";
import { useAtomDevtools } from "jotai-devtools";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);
  useAtomDevtools(userAtom, { name: "auth" });
  const insertUserInfo = (userData: User) => {
    setUser(userData);
  };

  const removeUserInfo = () => {
    setUser(null);
  };

  return { user, insertUserInfo, removeUserInfo, isLoggedIn: !!user };
};

const useLogin = () => {
  const { insertUserInfo } = useAuth();
  const navigate = useNavigate();
  return (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("email");
    const password = formData.get("password");

    const params = {
      email: name,
      password: password,
    };

    HTTP.post("api/auth/login", params).then((res) => {
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      HTTP.get("api/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        insertUserInfo(res.data);
        navigate("/home");
      });
    });
  };
};

export { useLogin };
