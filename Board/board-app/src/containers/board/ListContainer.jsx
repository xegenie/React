import React, { useEffect, useState } from 'react'
import BoardList from '../../components/board/BoardList'
import Pagination from '../../components/board/Pagination'
import * as boards from '../../apis/boards'

const ListContainer = () => {

  const [boardList, setBoardList] = useState([])
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  // 게시글 목록 데이터
  const getList = async (page = 1) => {
    const response = await boards.list(page);
    const data = await response.data;
    const list = data.list;
    const pagination = data.pagination;
    
    console.dir(data);
  
    // state 업데이트
    setBoardList(list);
    setPagination({
      currentPage: pagination.currentPage,
      totalPages: pagination.totalPages,  // totalPages가 마지막 페이지
    });
  };
  

  const handlePageChange = (page) => {
    getList(page);
  };
  

useEffect( () => {
  getList(1)
}, [])

  return (
    <>
    <div>ListContainer</div>
    <BoardList boardList={boardList} />
    <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </>
  )
}

export default ListContainer