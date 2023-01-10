import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const navigate = useNavigate();

const Main = (propos) => {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products").then()
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
const deleteFilter= (deleteID)=> {
    axios.delete("http://localhost:8000/api/products/" + deleteID)
                .then(res => {
                    console.log("DELETE SUCCESS", res.data)
                    setProducts(Products.filter((note) => note._id !== deleteID))
                })
                .catch(err => console.log(err))
}

    return (
        <fieldset>
            <legend>All Products</legend>
            {Products.map((OneProduct) => {
                return (
                    <div key={OneProduct._id}>
                        <Link to={`/products/${OneProduct._id}`}>
                            <h5> {OneProduct.Title}</h5>
                        </Link>
                        <button onClick={() => navigate(`/product/edit/${OneProduct._id}`)}>
                            Edit
                        </button>
                        <button onClick={() => deleteFilter(OneProduct._id)}>
                            Delete
                        </button>
                    </div>
                )
            })
            }
        </fieldset>
    )
}

export default Main