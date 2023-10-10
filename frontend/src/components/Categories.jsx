import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Categories.css'
import Table from "react-bootstrap/Table";
import { getCategories } from "../service/allApi";

function Categories() {
     const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
     useEffect(() => {
        getCategories().then((response) => {
           setCategories(response.data.categories);
           setLoading(false);
         })
         .catch((error) => {
           console.error("Error fetching categories:", error);
           setLoading(false);
         });
     }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
if (!categories) {
  return <div>Category not found</div>;
}

  return (
    <div className="container">
      <Table striped>
        <thead>
          <tr>
            <th>Categories({categories.length})</th>
            <th>
              <Link to="/create-category" className="btn btn-primary">
                Add Category
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>
                <Link
                  to={`/category/${category._id}`}
                  className="btn btn-success"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Categories;
