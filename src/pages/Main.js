import PageButton from "../components/PageButton";
import useGetTableData from "../hooks/useGetTableData";

const Main = () => {
  
  const[tableData,limit, setLimit, page, setPage] = useGetTableData();

  return (
    <>
      <div>
        <div>
          <select onChange={(e) => setLimit(e.target.value)}>
          {OPTION_VALUE_DATA.map((data,idx) => <option key={idx} 
                                                       value={data}>{data}</option>)}
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
        {BUTTONS_DATA.map((pageNum,idx) => <PageButton key={idx} 
                                                  pageNum={pageNum} 
                                                  setPage={setPage}/>)}
      </div>
      <div>현재 페이지는 {page} 페이지 입니다.</div>
    </>
  );

  
};
//페이지 번호
const BUTTONS_DATA = [1, 2, 3, 4, 5];

//option 태그 값
const OPTION_VALUE_DATA = [10,20,50];

export default Main;
