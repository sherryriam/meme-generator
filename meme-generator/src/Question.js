import React from 'react'
export default function Question() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    const answer = isGoingOut ? 'Yes' : 'No'
    
    function handleChange(){
        setIsGoingOut((prevIsGoingOut) => !prevIsGoingOut)
    }
    return(
        <div>
            <h1>Are you a patient person?</h1>
            <div className="condition" onClick={handleChange}>
                <h2>{answer}!</h2>
            </div>
            <h3>Your response is: {answer}</h3>
            <h3>Can we get started?  {answer === 'Yes' ? 'AWESOME! You can play the game now' : 'OOOPS! This game is not for you but you can still play'}</h3>
        </div>
    )
}