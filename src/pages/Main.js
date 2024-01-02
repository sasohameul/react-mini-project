import React, { useEffect, useState } from "react";

const Main = () => {
  const [tableData, setTableData] = useState(null);

  //한 페이지 내에서 보여줄 개수
  const [limit, setLimit] = useState(10);

  //몇번째 페이지
  const [page, setPage] = useState(1);

  const getTableDataHandle = async (page,limit) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    const data = await response.json();
    setTableData(data);
  }

  useEffect(() => {

    getTableDataHandle(page,limit);
    
  }, [limit, page]);

  
  return (
    <>
      <div>
        <div>
          <select onChange={(e) => setLimit(e.target.value)}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>contents</th>
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.map((data,idx) => {
              const { userId, id, title, body } = data;
              return (
                <tr key={idx}>
                  <td>{userId}</td>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={(e) => setPage(e.target.innerHTML)}>1</button>
        <button onClick={(e) => setPage(e.target.innerHTML)}>2</button>
        <button onClick={(e) => setPage(e.target.innerHTML)}>3</button>
        <button onClick={(e) => setPage(e.target.innerHTML)}>4</button>
        <button onClick={(e) => setPage(e.target.innerHTML)}>5</button>
      </div>
      <div>현재 페이지는 {page} 페이지 입니다.</div>
    </>
  );
};

export default Main;
