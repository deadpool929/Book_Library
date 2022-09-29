import { useState } from "react";
import "./App.css";
import { Books } from "./Books";
import Tables from "./Tables";

function App() {
  const [filterData, setFilterData] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");

  const findLanguage = (language) => {
    return language.filter((item) => {
      if (filterLanguage === "all books") {
        return item.idno.toLowerCase().includes("1");
      } else {
        return item.language.toLowerCase().includes(filterLanguage);
      }
    });
  };

  const filterTableOnSearch = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(filterData.toLowerCase()) ||
        item.author.toLowerCase().includes(filterData.toLowerCase()) ||
        item.idno.includes(filterData)
    );
  };

  return (
    <div className="App">
      <h1>Book Store Application</h1>
      <label>Language : </label>
      <select
        name="Languages"
        onChange={(event) => {
          setFilterLanguage(event.target.value.toLowerCase());
        }}
      >
        <option value="All Books">All books</option>
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
      </select>
      <label> Search : </label>
      <input
        type="text"
        placeholder="ID , Name , Author"
        className="search"
        onChange={(event) => {
          setFilterData(event.target.value);
        }}
      />

      <Tables filteredTable={filterTableOnSearch(findLanguage(Books))} />
    </div>
  );
}

export default App;
