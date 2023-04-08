import { Outlet } from 'react-router-dom'
import UserHeader from "../userHeader"
import UserFooter from '../userFooter'

const UserLayout = () => {
    return <>
        <UserHeader />
        <Outlet />
        <UserFooter />
    </>
}

export default UserLayout