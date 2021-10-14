import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Layouts/Navbar";
import Users from "./components/Widgets/Users";

const App = () => {
  const [persons, setPerson] = useState([]);

  useEffect(() => {
    axios("https://dummyapi.io/data/v1/post?limit=20", {
      headers: {
        "app-id": "615c67eec4de48862dd299d0",
      },
    })
      .then(({ data }) => setPerson(data.data))
      .catch((err) => console.error({ err }));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>Stories and Comments</h1>
      <div className="images">
        {persons.map((person) => {
          const {
            image,
            id,
            text,
            owner: { title, firstName, lastName, picture },
            tags: [animal, dog, type],
          } = person;
          return (
            <Users
              img={image}
              key={id}
              firstname={type}
              lastname={dog}
              comment={text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
