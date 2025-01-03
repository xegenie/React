import React, { useState } from 'react';
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Card = ({ product }) => {
  const { no, title, content, img, likes } = product;

  // ⭐ state 선언
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(likes);

  // ⭐ 이벤트 핸들러
  const handleLike = () => {
    setLike(!like);
    setCount(!like ? count + 1 : count - 1); // 좋아요 클릭 시 count를 증가시킴
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
      margin: "0 20px",
      width: "300px", // 카드의 폭 설정
      marginBottom: "20px" // 카드 간 간격
    }}>
      {/* 상품 이미지 */}
      <img style={{ width: "100%", height: "200px", objectFit: "cover" }} src={img} alt="상품 이미지" />
      {/* 컨텐츠 */}
      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
          {title}
        </h3>
        <p style={{ color: "#666", fontSize: "14px" }}>
          {content}
        </p>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          onClick={handleLike} // handleLike만 사용
        >
          {like ? (
            <Favorite style={{ color: "#ff4757", fontSize: "40px" }} />
          ) : (
            <FavoriteBorder style={{ color: "#ff4757", fontSize: "40px" }} />
          )}
          <span style={{ marginLeft: "5px", fontSize: "24px" }}>{count}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
