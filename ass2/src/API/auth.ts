import instance from ".";
import { SingupForm } from "../models";

export const singup = (data: SingupForm)=>{
    const uri = "/users"
    return instance.post(uri, data)
}