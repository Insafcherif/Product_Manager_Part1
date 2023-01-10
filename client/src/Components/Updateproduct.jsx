import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Upadateproduct = () => {

    const [product, setProdcuct] = useState({ Title: "", Price: "", Description: "" })
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000//api/products/" + id)
            .then(res => {
                console.log(res.data)
                setProdcuct(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    const UpdateProduct = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000//api/products/" + id, product)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/products")
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <fieldset>
            <legend>Create product</legend>
            <form onSubmit={UpdateProduct}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setProdcuct({ ...product, Title: e.target.value })}
                        value={product.Title}
                        name="title"
                        type="text"
                    />
                </div>
                <br />
                <div className="form-fields">
                    <label>Price</label>
                    <input
                        onChange={(e) => setProdcuct({ ...product, Price: e.target.value })}
                        value={product.Price}
                        name="price"
                        type="number"
                    />
                </div>
                <br />
                <div className="form-fields">
                    <label>Description</label>
                    <input
                        onChange={(e) => setProdcuct({ ...product, Description: e.target.value })}
                        value={product.Description}
                        name="description"
                        type="text"
                    />
                </div>
                <br />
                <input className="submit-input" type="submit" value="Create" />
            </form>
        </fieldset>
    )
}


export default Upadateproduct;
