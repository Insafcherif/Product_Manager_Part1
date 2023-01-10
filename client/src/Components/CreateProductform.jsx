import React, { useState } from 'react'
import axios from 'axios'

const CreateProductform = () => {

    const [product, setProdcuct] = useState({ Title: "", Price: "", Description: "" })
    const CreateProdcut = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", product).then((res) => {
            console.log(res);
            console.log(res.data);
            setProdcuct("")
        })
            .catch((err) => {

                console.log(err);
            })

    }

    return (
        <fieldset>
            <legend>Create product</legend>
            <form onSubmit={CreateProdcut}>
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


export default CreateProductform;
