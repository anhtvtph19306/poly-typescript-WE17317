import { Link } from "react-router-dom"
const UserHeader = () => {
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img className="w-[50px]" src="/logo.png" alt="" />
            <input className="grow" type="text" placeholder="Search" />
            <Link to={'/singup'} className="text-black">Đăng ký</Link >
        </div>
    </header>
}

export default UserHeader