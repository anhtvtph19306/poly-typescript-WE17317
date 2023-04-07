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
        <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/slider2.png" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden"></span>
    </button>
  </div>
        <h1 className="text-black-600"><b>SẢN PHẨM NỔI BẬT</b></h1>
        <div className="grid grid-cols-4 gap-3">
    {products.map(product=><Product data={product} key={product.id}/>)}
        </div>
    </div>
}

export default Home