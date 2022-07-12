import { useEffect, useState } from "react";
import ItemList from "./itemList";
import {useParams} from "react-router-dom"


function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        fetch(!categoryId?'https://fakestoreapi.com/products?limit=5':`https://fakestoreapi.com/products/category/${categoryId}`)
            .then(res=>res.json())
            .then(json=>setProducts(json));
    }, [categoryId]);

    return(
        <>
            <ItemList products={products}/>
            {console.log(categoryId)}
        </>
    );
}

export default ItemListContainer;