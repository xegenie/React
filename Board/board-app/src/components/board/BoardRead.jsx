import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './css/BoardRead.module.css'
import * as format from '../../utils/format'

const BoardRead = ({board, fileList, onDownload}) => {

  const {id} = useParams();

  return (
    <div className="container">
    <h1 className="title">게시글 조회</h1>
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>제목</th>
          <td>
            {/* 
              value vs defaultValue
              - Controllered Component (상태관리 컴포넌트)
                * 상태들이 변경되면 UI 에 업데이트
                * value 값의 변경을 UI 업데이트 가능

              - UnControllered Component (컴포넌트)
                * 상태 변경 감지 안 함
                * defaultValue 값은 초기에만 세팅
            */}
            <input type="text" className={styles['form-input']} defaultValue={board.title ?? ''} readOnly />
          </td>
        </tr>
        <tr>
          <th>작성자</th>
          <td>
            <input type="text" className={styles['form-input']} defaultValue={board.writer ?? ''} readOnly />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <textarea cols={40} rows={10} className={styles['form-input']} defaultValue={board.content ?? ''} readOnly></textarea>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            {
              fileList.map((file) => (
                <div className='flex-box' key={file.id}>
                  <div className="item">
                    <img src={`/api/files/img/${file.id}`} className='file-img' alt={file.originName}/>
                    <span>{file.originName} ({format.byteToUnit(file.fileSize)})</span>
                  </div>
                  <div className="item">
                    <button className='btn' onClick={ () => onDownload(file.id, file.originName) } >다운로드</button>
                  </div>
                </div>
              ))
            }
          </td>
        </tr>
      </tbody>
    </table>
    <div className="btn-box">
      <Link to="/boards"className='btn'>목록</Link>
      <Link to={`/boards/update/${id}`} className='btn'>수정</Link>
    </div>
  </div>
  )
}

export default BoardRead