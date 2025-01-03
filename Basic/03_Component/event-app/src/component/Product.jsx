import React, { useState } from 'react';

const Product = () => {
  // 상태 정의
  const [quantity, setQuantity] = useState(1); // 초기 수량
  const price = 1000; // 상품 가격
  const total = price * quantity; // 총 가격 계산

  // 이벤트 핸들러
  const increase = () => {
    setQuantity(quantity + 1); // 수량 증가
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // 수량 감소 (최소 1 이상으로 제한)
    }
  };

  return (
    <div>
      <h2>상품 정보</h2>
      <ul>
        <li>가격 : {price}원</li>
        <li>수량 : {quantity}</li>
        <li>총 가격 : {total}원</li>
      </ul>
      <button onClick={increase}>+</button>
      <button onClick={decrease} disabled={quantity === 1}>-</button>
    </div>
  );
};

export default Product;
