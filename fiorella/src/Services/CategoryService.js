import { httpClient } from '../utils/HttpClient';
export const getCategories = () =>{
  return httpClient.get("/api/Catagories")
};
export const PostCategories = (data) =>{
  return httpClient.post("/api/Catagories",data)
};