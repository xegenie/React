import React from 'react';
import './App.css'

// 클래스형 컴포넌트
class App extends React.Component {

  render() {
    // React 엘리먼트 생성
    // 1️⃣ React JavaScript로 엘리멘트 생성
    const link = React.createElement('a', {
      href: 'http://www.google.com',
      target: '_blank',
      style: { color: 'blue' }
    }, '구글 사이트 바로 가기')

    const box = React.createElement('div', {
      className: 'box'
    }, 'Box')

    const element = React.createElement('div', null,
      React.createElement('h1', null, 'Hello Element'),
      React.createElement('p', null, 'This is an Element'),
      link,
      box
    )

    // 2️⃣ JSX로 엘리먼트 생성
    const element2 = (
      <div>
        <h1>Hello Element</h1>
        <p>This is an Element</p>
        <a href="http://www.google.com"
           target='_blank'
           style={ { color: 'red' } }>구글 사이트 바로 가기</a>
        <div className="box">Box</div>
      </div>
    )

    return element2
  }

}

export default App;