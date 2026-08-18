import React, { use, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(20)

  function changeNum() {
    setNum(90)
    // console.log('hi'); for update value or increase values number...



  }

  // let a = 10;
  // function changeA() {
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }
  return (
    <div>
      <h1> Value of a is {num}</h1>
      {/* <button onClick={changeA}>Click</button> */}

      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
