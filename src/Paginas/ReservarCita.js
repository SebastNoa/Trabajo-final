import React, { useState } from 'react';
import './ReservarCita.css'
import Navbar from './Navbar';
const data = [
  { name: 'Juan', date: '26-05-2023' },
  { name: 'María', date: '26-05-2023' },
  { name: 'Pedro', date: '27-05-2023' },
  { name: 'Ana', date: '28-05-2023' },
];

const PersonCard = ({ name, date }) => (
  <div className="person-card">
    <h3>{name}</h3>
    <p>{date}</p>
  </div>
);

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    const filteredResults = data.filter(
      (person) =>
        person.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        person.date === searchValue
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Ingresa fecha o nombre"
      />
      <button onClick={handleSearch}>Buscar</button>

      <div>
        {searchResults.map((person, index) => (
          <PersonCard key={index} name={person.name} date={person.date} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
