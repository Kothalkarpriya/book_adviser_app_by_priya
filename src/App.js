import React from "react";
import "./styles.css";
import { useState } from "react";

const ourBooks = {
  Motivational: [
    {
      bookName: "Chanakya In Daily Life",
      author: "Radhakrishanan Pillai",
      rating: "5/5"
    },
    {
      bookName: "Jeevan Samjun Ghetana",
      author: "Gaur Gopal Das",
      rating: "5/5"
    }
  ],
  Aptitude: [
    {
      bookName: "Verbal and Non Verbal Resoning",
      author: "Dr. R.S.Aggarwal",
      rating: "4/5"
    },
    {
      bookName: "Quantitative Aptitude",
      author: "Dr. R.S.Aggarwal",
      rating: "4/5"
    }
  ],
  Javascript: [
    {
      bookName: "Eloquent JavaScript",
      author: "Margin Baverbeke",
      rating: "5/5"
    }
  ]
};
var name = "Book By: ";
export default function App() {
  const [genere, setGenere] = useState("Motivational");
  function clickHandler(genere) {
    setGenere(genere);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span>📚</span> Book Adviser
      </h1>
      <h4>Check Out My favourite Books. Select a genere to get started</h4>
      <div>
        {Object.keys(ourBooks).map((genere) => (
          <button
            onClick={() => clickHandler(genere)}
            style={{ padding: "1rem", margin: "1rem" }}
          >
            {genere}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {ourBooks[genere].map((book) => (
            <li key={book.bookName}>
              {" "}
              <div style={{ fontSize: "larger" }}>{book.bookName}</div>
              {/* <hr /> */}
              <div style={{ fontSize: "smaller" }}>
                {name}
                {book.author}
              </div>
              {/* <hr /> */}
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* <button style={{ padding: "1rem", margin: "1rem" }}> Aptitude </button>
        <button style={{ padding: "1rem", margin: "1rem" }}> Lifestyle </button> */}
    </div>
  );
}
