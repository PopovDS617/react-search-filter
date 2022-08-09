import './App.css';
import { Users } from './data/users';
import { useState } from 'react';
import Table from './Table';

function App() {
  const [query, setQuery] = useState('');

  // более простое решение
  //  const search = (data) => {
  //     return data.filter(
  //       (item) =>
  //         item.first_name.toLowerCase().includes(query) ||
  //         item.last_name.toLowerCase().includes(query) ||
  //         item.email.toLowerCase().includes(query)
  //     );
  //   };

  // более сложное решение. Если данных для фильтра будет много, то они заносятся в ключи
  const keys = ['first_name', 'last_name', 'email'];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Поиск..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      ></input>

      <Table searchResult={search(Users)} />
    </div>
  );
}

export default App;
