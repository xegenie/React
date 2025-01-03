import React from 'react';
import styles from './css/Pagination.module.css';

const Pagination = ({ pagination, onPageChange }) => {
  const { currentPage, totalPages } = pagination;  // 수정된 부분

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {  // last -> totalPages로 수정
      onPageChange(page);
    }
  };

  const pageButtons = [];
  for (let i = 0; i < totalPages; i++) {  // last -> totalPages로 수정
    pageButtons.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pageButton}
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
      >
        처음
      </button>
      <button
        className={styles.pageButton}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </button>

      {pageButtons.map((page) => (
        <button
          key={page}
          className={`${styles.pageButton} ${
            currentPage === page ? styles.active : ''
          }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.pageButton}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage >= totalPages}  // 수정된 부분
      >
        다음
      </button>
      <button
        className={styles.pageButton}
        onClick={() => handlePageClick(totalPages)}  // 수정된 부분
        disabled={currentPage === totalPages}  // 수정된 부분
      >
        끝
      </button>
    </div>
  );
};

export default Pagination;
