import { Fragment, useState } from "react";
import PageButton from "../components/PageButton";
import useGetTableData from "../hooks/useGetTableData";
import styled from "styled-components";


const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Table = styled.table`
  margin-bottom: 10px;
  width: 720px;

  th {
    border-bottom: 1px solid black;
  }
  th,
  td {
    padding: 10px;
  }

  th {
    border-bottom: 1px solid black;
    
  }

  tbody tr {
    margin-bottom: 13px;
    cursor: pointer;
  }

  tbody tr:hover {
    font-size: 18px;
    font-weight: 700;
    color: #536F01;
  }

`;

const NoPost = styled.td`

  text-align: center;
  cursor: default;
  font-size: 15px;
  color: black;
  font-weight: 400;

`;

const Button = styled.div`
  margin-right: 10px;
`;

const Select = styled.select`

  width: 100px;
  height: 35px;
  outline: none;
  background: url('https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png') 
              calc(100% - 5px) 
              center 
              no-repeat;
  background-size: 20px;
  border-radius: 4px;

  option {

    background: black;
    color: white;
    padding: 3px 0;
  }


`;


// 모달
const Modal = styled.div`
  background-color: white;
  border: 2px solid #536F01;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  color: black;
  width: 40%;
  height: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const ModalContents = styled.table`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  padding: 40px;

  > thead {
    margin-bottom:  30px;
    font-size: 18px;
  }

  > th {
    margin-bottom: 10px;
  }

  tr:nth-child(2) {
    font-size: 13px;

  }

  > tbody {

    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
  
`;

const CloseButton = styled.button`

  all: unset;
  border:none;
  background-color: #536F01; 
  cursor:pointer;
  color: white;
  padding: 10px;
  border: 1px solid white;
  border-radius: 3px;
  

  &:hover{

    background-color: white;
    color: #536F01;
    border: 1px solid #536F01;
    border-radius: 3px; 
  }

`;


const Main = () => {
  const [tableData, limit, setLimit, page, setPage] = useGetTableData();
  //내가 클릭한 제목
  const [selTitle, SetSelTitle] = useState(null);
  //모달창 open & close
  const [isVisible, SetIsVisible] = useState(false);

  const getContentsHandler = (idx) => {
    console.log(idx);
    SetIsVisible(true);
    SetSelTitle(idx);
  };

  const ModalCloseHandler = () => {
    SetIsVisible(false);
  };

  return (
    <>
      <div>
      <Column>
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.length > 0 ?
              tableData.map((data, idx) => {
                const { id, title } = data;
                return (
                  <tr key={idx}>
                    <td>{id}</td>
                    <td onClick={() => getContentsHandler(idx)}>{title}</td>
                  </tr>
                );
              })
            : (
              <tr>
                <NoPost colSpan={2}>더 이상의 게시물은 존재하지 않습니다.</NoPost>
              </tr>
            )}
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
          <Select onChange={(e) => setLimit(e.target.value)}>
            {OPTION_VALUE_DATA.map((data, idx) => (
              <option key={idx} value={data}>
                {data}
              </option>
            ))}
          </Select>
        </div>
      </Row>
      </div>

      {/* 모달 창*/}
      {isVisible && (
        <div>
          {tableData &&
            tableData.map((data, idx) => {
              const { userId, id, title, body } = data;
              if (idx === selTitle)
                return (
                  <Fragment key={idx}>
                    <Modal>
                      <ModalContents>
                        <thead>
                          <tr>
                            <th>{title}</th>
                            <th></th>
                            <th></th>
                          </tr>
                          <tr>
                            USER_ID: {userId} | ID: {id}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{body}</td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </ModalContents>

                      <CloseButton type="button" onClick={ModalCloseHandler}>
                        Close
                      </CloseButton>
                    </Modal>
                  </Fragment>
                );
                return null;
            })}
        </div>
      )}
    </>
  );
};
//페이지 번호
const BUTTONS_DATA = [1, 2, 3, 4, 5];

//option 태그 값
const OPTION_VALUE_DATA = [10, 20, 50];

export default Main;
