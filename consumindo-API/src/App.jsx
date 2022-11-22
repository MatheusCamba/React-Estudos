import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/matheuscamba/repos")
      .then((response) => {
        setItens(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <ul>
        {itens.map((item, index) => {
          return (
            <li key={index}>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
      {/* <h1>{itens.bio}</h1> */}
    </>
  );
}

export default App;

//CONSUMINDO API COM FETCH

// const [itens, setItens] = useState([]);

// useEffect(() => {
//   fetch("https://api.github.com/users/matheuscamba/repos")
//     .then((response) => response.json())
//     .then((data) => {
//       setItens(data);
//       console.table(data);
//     });
// }, []);

// return (
//   <>
//   <ul>
//    {itens.map((item, index) => {
//      return (
//        <li key={index}>
//         <strong>{item.full_name}</strong>
//         <p>{item.description}</p>
//       </li>
//     )
//   })}
//   </ul>
//   {/* <h1>{itens.bio}</h1> */}
//   </>
// );
