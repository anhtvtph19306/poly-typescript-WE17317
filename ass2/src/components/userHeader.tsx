import { Link } from "react-router-dom"
import { useLocalStorage } from "../hooks"

const UserHeader = () => {
    const [user, setUser] = useLocalStorage('user', null)
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-4 items-center">
            <img className="w-[50px]" src="/logo.png" alt="" />
            <input className="grow my-3 rounded-md" type="text" placeholder="Search" />
            <Link to={'/signup'} className="text-black">Đăng ký</Link >
            <p className="text-white">Xin chào: {user && user.lastName}</p>
        </div>
    </header>
}

export default UserHeader