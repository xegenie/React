import React, { useEffect, useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = () => {

  // ⬜ state
  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState('')

  // 🎁 이벤트 함수
  // ✅ 체크박스 토글 함수
  const onToggle = async (todo) => {

    // ## 클라이언트
    // // 클라이언트에서 status 변경
    // const newTodoList = todoList.map((item) => {
    //   return item.id == todo.id ? { ...item, status: !item.status } : item;
    // })
    
    // // 정렬된 목록 생성
    // newTodoList.sort((a, b) => {
    //   return a.status == b.status ? a.seq - b.seq : a.status - b.status 
    // });

    // 상태 수정 요청
    const data = {
      ...todo,
      status: !todo.status
    }
    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    try {
      const url = 'http://localhost:8080/todos'
      const response = await fetch(url, option)
      console.log(`response : ${response}`);
    } catch (error) {
      console.error('Response Failed', error);
      
    }

    // 서버로부터 할 일 목록 요청
    getList()

    // ## 클라이언트
    // state 업데이트
    // setTodoList( newTodoList )

  }

  // 전체 완료
  // [PUT] - /todos
  const onUpdateAll = async () => {

      const option = {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({"id": null})
      };

      try {
          const url = 'http://localhost:8080/todos';
          const response = await fetch(url, option);
              const msg = await response.text();
              console.log(`Success: ${msg}`);
      } catch (error) {
          console.error('Response Failed', error);
      }

      getList(); // 할 일 목록 다시 조회
  };


  // ❌ 삭제 함수
  const onRemove = async (id) => {
    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const url = `http://localhost:8080/todos/${id}`
      const response = await fetch(url, option)
      const msg = await response.text()
      console.log(msg);
    } catch (error) {
      console.error(error);
    }

    getList()

  }
  // ❌ 전체 삭제 함수
  const onRemoveAll = async () => {
    const option = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const url = `http://localhost:8080/todos`
      const response = await fetch(url, option)
      const msg = await response.text()
      console.log(msg);
    } catch (error) {
      console.error(error);
    }

    getList()

  }

  const onChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault(); // 기본 이벤트 동작 방지(form 제출)
    const newInput = input === '' ? '제목 없음' : input;

    // 데이터 등록 요청
    const data = {
      name: newInput,
      seq: 1
    }
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    try {
      const url = 'http://localhost:8080/todos'
      const response = await fetch(url, option)
      const msg = await response.text()
      console.log(msg);
    } catch (error) {
      console.error(error);
    }

    getList()     // 할 일 목록 다시 조회
    setInput('')  // 입력 값 비우기

  }

  const getList = () => {
     // 할일 목록 요청
     fetch('http://localhost:8080/todos')
     .then( response => response.json() )
     .then( data => { 
       // data.list       : 할일 목록
       // data.pagination : 페이지 정보
       setTodoList( data.list )
     })
     .catch( error => { console.error('Request failed', error)});
  }

  useEffect(() => {
   getList()
  }, [])

  return (
    <div className="container">
        <TodoHeader/>
        <TodoInput input={input} onChange={onChange} onSubmit={onSubmit} />
        <TodoList todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
        <TodoFooter onRemoveAll={onRemoveAll} onUpdateAll={onUpdateAll} />
    </div>
  )
}

export default TodoContainer