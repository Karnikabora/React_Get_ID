import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import PersonDetails from "./Components/PersonDetails";

const App = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetchPerson();
  }, []);

  const fetchPerson = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      const data = response.data;
      const personData = data.results[0];
      setPerson({
        name: `${personData.name.title} ${personData.name.first} ${personData.name.last}`,
        gender: personData.gender,
        location: personData.location,
        email: personData.email,
        phone: personData.phone,
        picture: personData.picture.large,
      });
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  const handleNextClick = () => {
    fetchPerson();
  };

  return (
    <div className="App">
      <h1>Person Details</h1>
      {person ? <PersonDetails person={person} /> : <p>Loading...</p>}
      <button className="cus-button" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default App;
