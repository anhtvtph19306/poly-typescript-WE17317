import {Outlet} from 'react-router-dom'
import UserHeader from "./userHeader"
import Slider from './slider'
import UserFooter from './userFooter'

const UserLayout = () => {
    return <>
        <UserHeader/>
        <Slider/>
        <Outlet/>
        <UserFooter/>        
    </>
}

export default UserLayout