import React from "react";

const PageButton = ({pageNum, setPage}) => {

 return (
  <button onClick={()=>setPage(pageNum)}>{pageNum}</button>
 )


}

export default PageButton;