import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [click, setClick] = useState<Number>(0);
  const [data, setData] = useState<Object>();
  useEffect(() => {
    const fetchData = async () => {
      if (click === 1) {
        // fetch 사용
        const endpoint = "http://localhost:3000/graphql";
        const query = `{
          user{
            id
            firstName
            age
          }
        }`;
        const res = await fetch(endpoint, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });
        const d = await res.json();
        setData(d.data);
      } else if (click === -1) {
        // axios 사용
        const query = `{
          company{
            id
            name
            description
          }
        }`;
        const res = await axios({
          method: "post",
          url: "/graphql",
          data: { query },
        });
        setData(res.data);
      }
    };
    fetchData();
  }, [click]);
  return (
    <div>
      <button
        onClick={() => {
          setClick(1);
        }}
      >
        user
      </button>
      <button
        onClick={() => {
          setClick(-1);
        }}
      >
        company
      </button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
