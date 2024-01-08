import { customAxios } from "./customAxios";

export const getTableDataHandle = async (
  page,
  limit,
  successHandle,
  failHandle
  
) => {

    try {
      const response = await customAxios(`/posts?_page=${page}&_limit=${limit}`);

      if(response) successHandle(response.data);
      else failHandle(response.data);

    } catch (error) {

      console.log(error);
      
    }

};