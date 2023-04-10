import { useEffect, useState } from "react"
import { IProduct } from "../models"
import { getAll, removeProduct } from "../API/products"
import { Link } from "react-router-dom"

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    const onHandleRemove = async (id: string) => {
        try {
            const isConfirm = confirm("Are you sure?");
            if (isConfirm) {
                await removeProduct(id);
                const newProducts = products.filter((item) => item.id !== id);
                setProducts(newProducts);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return <>
        <h2 className="my-16">Product list</h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Tên sản phẩm
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Giá khuyến mãi
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Hình ảnh
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Thao tác
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <Link to={`/admin/product/${product.id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{VND.format(product.price)}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{VND.format(product.original_price)}</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <img className="w-[80%]" src={product.images?.[0].base_url} alt="" />
                            </td>
                            <td className="text-center">
                                <button className="bg-red-600 text-white rounded-md p-2" onClick={() => onHandleRemove(product.id)}>Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >

    </>

}
export default Dashboard