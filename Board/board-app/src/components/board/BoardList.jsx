import React from 'react'
import {Link} from 'react-router-dom'
import * as format from '../../utils/format'
// import './css/BoardList.css'
import styles from './css/BoardList.module.css'
import noImage from '../../assets/react.svg'

const BoardList = ({boardList}) => {
  // const boardList = [
  //   { no: 1, title: "게시글제목1", writer: "작성자1", createdAt: "2024-12-30 12:45:50"},
  //   { no: 2, title: "게시글제목2", writer: "작성자2", createdAt: "2024-12-30 12:45:50"},
  //   { no: 3, title: "게시글제목3", writer: "작성자3", createdAt: "2024-12-30 12:45:50"},
  //   { no: 4, title: "게시글제목4", writer: "작성자4", createdAt: "2024-12-30 12:45:50"},
  //   { no: 5, title: "게시글제목5", writer: "작성자5", createdAt: "2024-12-30 12:45:50"},
  // ]

  return (
    <div className="container">
      <h1 className='title'>게시글 제목</h1>
      <Link to="/boards/insert" className='btn'>글쓰기</Link>

      <table className={`${styles.table}`} border={1}>
        <thead>
          <tr>
            <th>이미지</th>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>등록 일자</th>
          </tr>
        </thead>
        <tbody>
          {/* 화살표 함수 내용이 한 문장이면, {}, return 생략 */}
            {/* () => */}
            {/* () => () */}
          {/* { } 안에서 함수 내용 작성 - return 선택 */}
            {/* () => {return ?} */}
          {
            boardList.length == 0
            ?
            <tr>
              <td colSpan={5}>조회된 데이터가 없습니다.</td>
            </tr>
            :
            boardList.map( (board) => (
              <tr key={board.no}>
                <td align='center'>
                  {
                    board.file == null
                    ?
                    <img src={noImage} style={{ width: '100px' }} className='file-img'/>
                    :
                    <img src={`/api/files/img/${board.file.id}`} style={{ width: '100px' }} className='file-img'/>
                  }  
                </td>
                <td align='center'>{board.no}</td>
                <td align='left'>
                  <Link to={`/boards/${board.id}`}>{board.title}</Link>
                </td>
                <td align='center'>{board.writer}</td>
                <td align='left'>{format.formatDate(board.createdAt)}</td>
              </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default BoardList