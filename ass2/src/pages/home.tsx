import { useEffect, useState } from "react"
import Product from "../components/product"
import { IProduct } from "../models"
import { getAll } from "../API/products"

const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async()=>{
        const {data} = await getAll()
        setProducts(data)
    }

    useEffect(()=>{
        fetchProducts()
    },[])
    return <div>
        <h1 className="text-black-600"><b>SẢN PHẨM NỔI BẬT</b></h1>
        <div className="grid grid-cols-4 gap-3">
    {products.map(product=><Product data={product} key={product.id}/>)}
        </div>
    </div>
}

export default Home