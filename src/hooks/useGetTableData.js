import { useState, useEffect } from "react";
import { getTableDataHandle } from "../api/apis";

const useGetTableData = () =>{

  const [tableData, setTableData] = useState(null);

  //한 페이지 내에서 보여줄 개수
  const [limit, setLimit] = useState(10);

  //몇번째 페이지
  const [page, setPage] = useState(1);

  useEffect(() => {

    const successHandle = (response) => {
      
      setTableData(response);
    
    }
    
    getTableDataHandle(page,limit,successHandle);
    
  }, [limit,page]);


  return [tableData, limit, setLimit, page, setPage];

}

export default useGetTableData;