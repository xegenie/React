import React from 'react'

const TodoInput = ( { input, onChange, onSubmit } ) => {
  return (
    <div>
        <form action="" className='form' onSubmit={onSubmit}>
            <input type="text"
                   className='input'
                   placeholder='할 일 입력' 
                   value={input}
                   onChange={onChange} />
            <button type="submit" className='btn'>
                추가
            </button>
        </form>
    </div>
  )
}

export default TodoInput