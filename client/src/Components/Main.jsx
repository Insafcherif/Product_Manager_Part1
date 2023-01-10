import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

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


    return (
        <fieldset>
            <legend>All Products</legend>
            {Products.map((OneProduct) => {
                return (
                    <div key={OneProduct._id}>
                        <Link to={`/products/${OneProduct._id}`}>
                            <h5> {OneProduct.Title}</h5>
                        </Link>
                    </div>
                )
            })
            }
        </fieldset>
    )
}

export default Main