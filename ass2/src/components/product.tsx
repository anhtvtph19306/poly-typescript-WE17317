import { IProduct } from "../models";
import { Link } from "react-router-dom";

type Props = {
    data: IProduct
}
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
const Product = ({ data }: Props) => {
    return <Link to={`/product/${data.id}`} className="block">
        <img
            alt="Art"
            src={data.images?.[0].base_url}
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {data.name}
        </h3>

        <h4 className="mt-4 text-lg font-bold text-red-600 sm:text-xl">
            {VND.format(data.price)}
        </h4>
        <p className="mt-2 max-w-sm text-gray-400">
            {VND.format(data.original_price)}
        </p>
        <p className="mt-2 max-w-sm text-gray-700">
            <div className="" dangerouslySetInnerHTML={{ __html: data.description.substring(0, 70) }}></div>
        </p>
    </Link>
}

export default Product;