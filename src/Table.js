import React from 'react';

const Table = ({ searchResult }) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>E-mail</th>
          <th>Gender</th>
        </tr>

        {searchResult.length ? (
          searchResult.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="not-found">nothing... </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
