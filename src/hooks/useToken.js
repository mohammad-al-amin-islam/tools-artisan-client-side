import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    if (email) {
      fetch(
        `https://tools-artisan-server-side-9wl8.onrender.com/user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;
          localStorage.setItem("accessToken", token);
          setToken(token);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
