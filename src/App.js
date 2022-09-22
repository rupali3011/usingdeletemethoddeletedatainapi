import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setshow] = useState([]);
  async function Display() {
    const urll = `https://assessment.api.vweb.app/users`;
    const res = await fetch(urll);
    const data = await res.json();
    setshow(data);
  }
  function Deletefn(id) {
    fetch("https://assessment.api.vweb.app/users" + id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  }
  useEffect(() => {
    Display();
  });
  return (
    <div className="App">
      {show.map((it) => (
        <tr Key={it.user_id}>
          <td>{it.user_id}</td>
          <td>,{it.name}</td>
          <td>
            <button
              onClick={() => {
                Deletefn(it.user_id);
              }}
            >
              delete
            </button>
          </td>
        </tr>
      ))}
    </div>
  );
}
