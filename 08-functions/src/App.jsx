import React from 'react'

const App = () => {
  function btnClicked() {
    console.log('Button is clicked..');

  }
  function btnClickede() {
    console.log('Button is clicked Explore..');

  }

  function mouseEnter() {
    console.log('mouse enter');

  }

  function inputChanging() {
    console.log('User Is Typing...');

  }
  return (
    <div>
      <input onClick={() => {
        console.log('input par clicked');

      }} type="text" placeholder='Enter Your name ' />

      <input onChange={inputChanging} type="text" placeholder='Enter Your Address.' />


      {/* this are event get details --> */}
      <input onChange={function (elem) {
        console.log(elem.target.value);  // ye jo likh rha hai uska value hi print kra dega--- = .target.value

      }} type="text" placeholder='Enter Your number' />

      <h1 className='bg-red'>Hello Employer--</h1>
      {/* <button onClick={btnClicked}>Change User</button> */}

      <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>Click Here</button>
      <button onDoubleClick={btnClickede}>Explore More.</button>
      <div onMouseMove={() => {
        console.log('Under the box');

      }

      }
        className='box'></div>

    </div>


  )
}

export default App
