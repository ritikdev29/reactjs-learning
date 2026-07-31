import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar';

const user = 'Hi, Gautam  '
let r = 20;
let g = 40;
let result = r + g;

let age = 21;


const App = () => {
  return (
    <div>
      <Navbar />
      <div className='card'>
        <h1>Ritik Kumar  {user}{result}</h1>
        <h2>And I Am  {age} Years Old</h2>
        {<p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci sit error voluptas laudantium culpa, dolores qui deleniti corrupti, aspernatur nostrum tempora! Mollitia ipsum autem in recusandae molestias possimus enim laboriosam.</p>}

      </div>
      {Card()}
    </div>

  )
}

export default App
