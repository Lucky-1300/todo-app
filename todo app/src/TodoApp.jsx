import React from 'react'

export const TodoApp = () => {
  return (
    <div className='container'>
      <h1 className="heading">My Tasks</h1>
      <p className='para'>Keep track of your daily tasks</p>

      <div className='container2'>
        <div className='container3'>
          <input className="input-box" placeholder='Add a new task..' />
          <button className='btn'>+</button>
        </div>

        <div>
          <label>
            <input type="checkbox" />
            Task 1
          </label>

          <br />

          <label>
            <input type="checkbox" />
            Task 2
          </label>
        </div>

      </div>
    </div>
  )
}
