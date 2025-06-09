import { FormEvent } from "react";
import { HTTP } from "../../util/HTTP";

const useLogin = () => {
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
      }).then((res) => console.log(res.data));
    });
  };
};

export { useLogin };
