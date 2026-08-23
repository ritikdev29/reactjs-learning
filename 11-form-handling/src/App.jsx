import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submited');

  }
  return (
    <div>
      <form onSubmit={(e) => {   // e kai jagah par kuchh bhi likh saktey hai --->
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your name'
          onChange={() => {
            console.log('inputing..');

          }} />
        <input type="text" placeholder='Enter father`s name' />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
