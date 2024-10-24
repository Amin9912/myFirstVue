import Api from "./Api";

const END_POINT = 'products'

export default{
    all(){
        return Api.get(END_POINT)
    },
    get(id){
        return Api.get(`${END_POINT}/${id.toString()}`)
    },
    add(data){
        return Api.post(`${END_POINT}/`, data)
    },
    update(id, data){
        return Api.put(`${END_POINT}/${id.toString()}`, data)
    },
    delete(id){
        return Api.get(`${END_POINT}/${id.toString()}`)
    },
}