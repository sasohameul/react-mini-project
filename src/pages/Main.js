import { Fragment, useState } from "react";
import PageButton from "../components/PageButton";
import useGetTableData from "../hooks/useGetTableData";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  margin-bottom: 10px;
`;

const Button = styled.div`
  margin-right: 10px;
`;

const Modal = styled.div`

  background-color: black;
  color: white;
  width:40%;
  margin-bottom:10px;


`;

const Main = () => {
  const [tableData, limit, setLimit, page, setPage] = useGetTableData();
  const [isVisible, SetIsVisible] = useState(false);
  const [selTitle, SetSelTitle] = useState(null);

  const getContentsHandler = (idx) => {
    console.log(idx);
    SetIsVisible(true);
    SetSelTitle(idx);

  };

  const ModalCloseHandler = () => {

    SetIsVisible(false);

  }

  return (
    <>
      <Column>
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.map((data, idx) => {
                const { id, title } = data;
                return (
                  <tr key={idx}>
                    <td>{id}</td>
                    <td onClick={()=>getContentsHandler(idx)}>{title}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Column>
      <Row>
        <Button>
          {BUTTONS_DATA.map((pageNum, idx) => (
            <PageButton key={idx} pageNum={pageNum} setPage={setPage} />
          ))}
        </Button>
        <div>
          <select onChange={(e) => setLimit(e.target.value)}>
            {OPTION_VALUE_DATA.map((data, idx) => (
              <option key={idx} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </Row>
      <Column>현재 페이지는 {page} 페이지 입니다.</Column>

     { isVisible && <div>
        {tableData && 
         tableData.map((data, idx) => {
            const { userId, id, title, body } = data;
            if(idx === selTitle)
            return (
              <Fragment key={idx}>
                <Modal>
                <table>
                  <thead>
                    <tr>
                      <th>{title}</th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      USERID: {userId} | ID: {id}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{body}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>

                <button type="button" onClick={ModalCloseHandler}>Close</button>
                </Modal>
              </Fragment>
            );
          })}
      </div>
     }
    </>
  );
};
//페이지 번호
const BUTTONS_DATA = [1, 2, 3, 4, 5];

//option 태그 값
const OPTION_VALUE_DATA = [10, 20, 50];

export default Main;
