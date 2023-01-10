import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const OneProduct = (propos) => {
    const { id } = useParams()
    const [oneProdct, setOneProduct] = useState({})

    useEffect(() => {

        axios.get("http://localhost:8000//api/products/" + id)
            .then(res => {
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <h2>{oneProdct.Title}</h2>
            <p>Price: ${oneProdct.Price}</p>
            <p>Description: {oneProdct.Description}</p>
        </div>
    )
}

export default OneProduct