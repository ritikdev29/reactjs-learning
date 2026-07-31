import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Ritik Kumar </h1>
        {<p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci sit error voluptas laudantium culpa, dolores qui deleniti corrupti, aspernatur nostrum tempora! Mollitia ipsum autem in recusandae molestias possimus enim laboriosam.</p>}

      </div>
      {Card()}
    </div>

  )
}

export default App
