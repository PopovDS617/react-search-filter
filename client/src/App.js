import './App.css';
import { useState, useEffect } from 'react';
import Table from './Table';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) {
      fetchUsers();
    }
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Поиск..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      ></input>

      <Table searchResult={data} />
    </div>
  );
}

export default App;
