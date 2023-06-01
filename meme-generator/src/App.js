import React from 'react'
import './App.css';
import  Header from './Header';
import Meme from './Meme'
import Question from './Question'


function App() {
  const num = 10000000;
  const [things, setThings]= React.useState(["Thing 1", "Thing 2"])
  const thingsElements = things.map((thing) => {
     return( 
       <p className="thing-color">{thing}</p>
     )
  })
  function addItem(){
    const newThingText = `thing ${things.length + 1}`
    setThings(prevState => [
      ...prevState, newThingText
    ])
  
  }


  return (
    <div className="App">
      <Header />
      <Meme />
      <Question />
      <div>
        <button className="add-item-btn" onClick={addItem}>Add item</button>
        {thingsElements}
        <h2>Instructions</h2>
        <p>I have {thingsElements.length} items in my large box, you can add {num} items on it to see magic</p>
        <p>Make sure you don't refresh the page before you add {num} items in the large box because you will lose</p>
        <h3>Good luck!</h3>
      </div>
    </div>
  )
}

export default App;
