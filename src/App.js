import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");

  function fetchAge() {
    if (!name) return;
    const baseUrl = `https://api.agify.io`;
    const url = `${baseUrl}?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }

  useEffect(fetchAge, [name]);

  function Entry() {
    const [content, setContent] = useState("");
    function submit(e) {
      e.preventDefault();
      setName(content);
    }
    return (
      <form onSubmit={submit}>
        Name:{" "}
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </form>
    );
  }

  return (
    <div className="App">
      <h1>Age Guesser</h1>
      <Entry />
      <br />
      <img
        src="https://play-lh.googleusercontent.com/VC7rta8PIK3MqmQG5c-F5CNJQ6cCv6Eb-kyBoUcQ2xj83dZVhn7YCj_GIWW8y7TnAMjU=w600-h300-pc0xffffff-pd"
        alt=""
      />
      <br />
      {!data ? (
        "Nothing here yet"
      ) : (
        <div>
          <h3> {data.name} </h3>

          <p>
            {" "}
            {data.name} is {data.age} years old and 1 of {data.count} worldwide
          </p>
        </div>
      )}
    </div>
  );
}
