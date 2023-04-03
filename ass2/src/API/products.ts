import instance from "."

export const getAll = ()=>{
    const uri = "/products"
    return instance.get(uri)
}