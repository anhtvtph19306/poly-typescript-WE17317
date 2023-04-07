import { useParams } from 'react-router-dom'
import { getById } from '../API/products'
import { useEffect, useState } from 'react'
import { IProduct } from '../models'
import { Link } from 'react-router-dom';
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
const ProductDetail = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const { id } = useParams()

    const fetchProduct = async () => {
        if (id) {
            const { data } = await getById(id)

            setProduct(data)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return <>
        <Link to={`/`}><button className='text-white border bg-red-600 my-9 p-2 '>Trang chủ</button> </Link><br></br>


        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div>
                    <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>
                </div>

                <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                    <div className="lg:col-span-3">
                        <div className="relative mt-4">
                            <img
                                alt="Tee"
                                src={product.images?.[0].base_url}
                                className="h-72 w-96 rounded-xl object-cover lg:h-[100%]"
                            />

                            <div
                                className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
                            >
                                <svg
                                    className="h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                </svg>

                                <span className="ml-1.5 text-xs"> Hover to zoom </span>
                            </div>
                        </div>

                        <ul className="mt-1 flex gap-1">
                            <li>
                                <img
                                    alt="Tee"
                                    src={product.images?.[1].base_url}
                                    className="h-16 w-16 rounded-md object-cover"
                                />
                            </li>

                            <li>
                                <img
                                    alt="Tee"
                                    src={product.images?.[0].large_url}
                                    className="h-16 w-16 rounded-md object-cover"
                                />
                            </li>

                            <li>
                                <img
                                    alt="Tee"
                                    src={product.images?.[1].medium_url}
                                    className="h-16 w-16 rounded-md object-cover"
                                />
                            </li>

                            <li>
                                <img
                                    alt="Tee"
                                    src={product.images?.[0].thumbnail_url}
                                    className="h-16 w-16 rounded-md object-cover"
                                />
                            </li>
                        </ul>
                    </div>

                    <div className="lg:sticky lg:top-0">
                        <form className="space-y-4 lg:pt-8">
                            <fieldset>
                                <legend className="text-lg font-bold">{product.name}</legend>

                                <div className="mt-2 flex flex-wrap gap-1">
                                </div>
                            </fieldset>





                            <div>
                                <p className="text-xl font-bold text-red-600">{VND.format(product.price)}</p><br />
                                <p className="text-xs from-neutral-500 text-black">{VND.format(product.original_price)}</p><br />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                            >
                                Mua ngay
                            </button>

                            <button
                                type="button"
                                className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </form>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="prose max-w-none">
                            <p>
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ProductDetail