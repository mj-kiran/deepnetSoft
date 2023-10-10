import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BASE_URL from "../service/BaseUrl";

function CategoryDetail() {
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  const navigate=useNavigate()

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/categories/${categoryId}`)
      .then((response) => {
          setCategory(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching category:", error);
          setLoading(false);
        });
    //   products
      axios
        .get(`${BASE_URL}/api/products/get-products-by-category/${categoryId}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
  
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container">
      <div className="buttons_top w-100">
        <Link to={`/`} className="btn btn-success">
          home
        </Link>
        &nbsp;
        <Link
          to={`/category/${categoryId}/create-Subcategory`}
          className="btn btn-primary justify-content-end"
        >
          Add SubCategory
        </Link>
      </div>
      <br/>
      <h1 className="">{category.name}</h1>
      <br/>
      <h4>Subcategories({category.subcategories.length})</h4>
      <ul className="subcat_list">
        {category.subcategories.map((subcategory) => (
          <Button className="sc_b" onClick={()=>navigate(`/category/${categoryId}/${subcategory._id}`)} >
            <span key={subcategory._id}>{subcategory.name}</span>
          </Button>
        ))}
      </ul>
      

      <Table striped>
        <thead>
          <tr>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CategoryDetail;
