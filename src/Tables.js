import React from "react";

const Tables = ({ filteredTable }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AUTHOR</th>
          <th>DISCRIPTION</th>
          <th>PAGES</th>
          <th>PRICE</th>
        </tr>
        {filteredTable.map((item) => (
          <tr key={item.id}>
            <td>{item.idno}</td>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.discription}</td>
            <td>{item.pages}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Tables;
