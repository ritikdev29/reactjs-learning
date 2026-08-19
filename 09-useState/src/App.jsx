import React, { use, useState } from 'react'

const App = () => {

  // state Board hai -->
  const [num, setNum] = useState(20)
  const [username, setUsername] = useState('Rk')
  const [users, setUsers] = useState([10, 20, 30])  // value change in array using function call 
  const [incre, setNums] = useState(0) // for h2

  const [ak, setArray] = useState([10, 20, 30])
  const btnClicked3 = () => {  // update the Arrays function ---->
    const newNum1 = [...ak]
    newNum1.push(99)

    setArray(newNum1)
    // console.log(newNum1);




  }

  // const [jump, setNums] = useState(2)

  const [name, setName] = useState({ users: 'Ritik', age: 22 }) // koi bhi variable jo ki Array kai under saved hai or koi object kai under saved hai to usko change karna hai to use krengey

  const btnClicked = () => {
    const newNum = { ...name };
    newNum.users = 'Gautam'
    newNum.age = 21
    setName(newNum)

    setName(newNum)
  }


  function changeNum() {
    setNum(90)
    setUsername('Hello')
    setUsers('92 19 07')
    // console.log('hi'); for update value or increase values number...
  }
  function increaseNum() {
    // setNums(30)
    setNums(incre + 1)
    console.log('increasing');


  }
  function decreaseNum() {
    // setNums(60)
    setNums(incre - 1)
    console.log('decreasing')
  }

  function jump5Num() {
    setNums(incre + 5)
  }

  // let a = 10;
  // function changeA() {
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }
  return (
    <div>
      <h1> Value of a is {num} <br /> <hr /> Value User Name is {username}  <br />{users} </h1>
      {/* <button onClick={changeA}>Click</button> */}

      <button onClick={changeNum}>Click</button>


      <div >
        <h2>{incre}</h2>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum} >Decrease</button>
        <button onClick={jump5Num}>Increase 5 t</button>

      </div>

      <div>
        <h4>{name.users}, {name.age}</h4>
        <button onClick={btnClicked}>Hey !</button>
      </div>

      <div>
        <h5>{ak}</h5>
        <button onClick={btnClicked3}>Update Array Button</button>
      </div>

    </div>
  )
}

export default App
