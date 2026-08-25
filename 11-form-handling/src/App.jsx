import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submited by ', title);


    setTitle('')  // this is work form submit krengey to submit krtehi div refrensh ho jayega

  }
  return (
    <div>
      <form onSubmit={(e) => {   // e kai jagah par kuchh bhi likh saktey hai --->
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your name'
          value={title}
          // value='ritik' ye set ho gya hai values
          // onChange={() => {
          onChange={(e) => {

            // console.log('inputing..');
            //  console.log(e.target.value);
            setTitle(e.target.value);



          }} />
        {/* <input type="text" placeholder='Enter father`s name'
          onChange={() => {
            console.log('inputing..');

          }} /> */}
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
