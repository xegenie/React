import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardList = () => {
  const [productList, setProductList] = useState([]);

  // 🌞 데이터 요청 함수
  const getProductList = async () => {
    try {
      const response = await fetch('http://localhost:8080/products');
      if (!response.ok) {
        throw new Error(`error: ${response.status}`);
      }
      const data = await response.json(); // JSON 파싱
      setProductList(data);
    } catch (error) {
      console.error('error:', error);
    }
  };
  

  // ❔ useEffect 훅 사용
  useEffect(() => {
    getProductList(); // 컴포넌트가 마운트될 때 데이터를 요청
  }, []); // 빈 배열을 사용해 한 번만 실행됨

  return (
    <div>
      <h1>상품 목록</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        rowGap: "40px"
      }}>
        {
          productList.map((product) => (
            <Card
              key={product.no}
              product={product}
            />
          ))
        }
      </div>
    </div>
  );
};

export default CardList;
