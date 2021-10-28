import { useState, useEffect } from "react";
const User = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/user");
      const data = await res.json();
      return data;
    }
    fetchData().then((data) => {
      setUser(data.NAME);
    });
  }, []);
  return <div>{user}</div>;
};

export default User;
