import React from 'react'
import Card from './Card'

const CardList = () => {
  // Card 컴포넌트에 전달할 데이터
  const cardData = [
    { no: 1, title: '아메리카노', content: '콜롬비아 원두로 만든...', data: 10, link: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MzFfMjIy%2FMDAxNjkzNDM2ODU0NzQ4.J6ubv9phsSESxFO5rRcSbVoqqDDm7jtx9QRwUfome40g.nXaeu3ymCpDUOfzXes37gCCxp96zO9I6Lfe31hCZJIcg.PNG.mvmfitness11%2F%25C4%25BF%25C7%25C72.png&type=a340'},
    { no: 2, title: '카페라떼', content: '라떼는 말이야...', data: 20, link: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MDZfMjgy%2FMDAxNzIwMjQ4MjY4ODU3.cNd1jXa4x-KyUSxO5vtht8ibIgBrL7WURkJp51jz3LYg.KVjcRjxVWkpLEIWENNY-tv_L6Jws_d592Oqq1OWSon4g.JPEG%2F9200000001941_20210225094346658.jpg&type=a340' },
    { no: 3, title: '자바칩 프라푸치노', content: 'java ?...', data: 30, link: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjJfMTc4%2FMDAxNzA1OTI5OTQ3Mjc2.19mjLXbDMxCQCilf9mjPFYHPJgN2jXXjg6AdwUOzrn4g.suAQThY7ibNn9t1duaowVA7F_1UUeOBAJXjDfXuZNTgg.JPEG.hyuni_525%2FIMG_3191.JPG&type=a340' },
  ]
  return (
    <div>
      <h1>상품목록</h1>
      <div style={{ display: "flex" }}>
        {
          cardData.map((card, index) => {
        //    return  <Card key={card.no} title={card.title} content={card.content} />
        //    return  <Card key={card.no} {...card} />
           return  <Card key={card.no} card={card} />
            })
        }
      </div>
    </div>
  )
}

export default CardList
