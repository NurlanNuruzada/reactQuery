import { httpClient } from '../utils/HttpClient';
export const getCategories = () =>{
  return httpClient.get("/api/Catagories")
};
export const PostCategories = (data) =>{
  return httpClient.post("/api/Catagories",data)
};
export const deleteCategory = (id) =>{
  return httpClient.delete(`/api/Catagories/${id}`)
};
export const UpdateCategory = (id,data) =>{
  return httpClient.put(`/api/Categories/${id}`,data)
};

