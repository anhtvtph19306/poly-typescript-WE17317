import instance from ".";
import { SinginForm, SingupForm } from "../models";

export const singup = (data: SingupForm)=>{
    const uri = "/users"
    return instance.post(uri, data)
}

export const singin = (data: SinginForm)=>{
    const uri = "/users"
    return instance.post(uri, data)
}