import instance from ".";
import { SinginForm, SingupForm } from "../models";

export const singup = (data: SingupForm)=>{
    const uri = "/singup"
    return instance.post(uri, data)
}

export const singin = (data: SinginForm)=>{
    const uri = "/singin"
    return instance.post(uri, data)
}