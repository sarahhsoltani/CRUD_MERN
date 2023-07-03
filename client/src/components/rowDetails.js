import React from "react";
import { Link } from "react-router-dom";

function RowDetails({ Email, FirstName, LastName, Age, _id, onDelete }) {
  return (
    <tr>
      <td>{Email}</td>
      <td>{FirstName}</td>
      <td>{LastName}</td> 
      <td>{Age}</td>
      <td className="gap__actions">
        <span className="badge bg-info">
          <Link to={`/${_id}`} className="text-white">
            <i className="fas fa-edit"></i>
          </Link>
        </span>
        <span className="badge bg-danger" onClick={() => onDelete(_id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
}

export default RowDetails;
