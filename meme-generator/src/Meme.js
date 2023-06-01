import React from 'react'
import memesData from "./memesData.js"


export default function Meme(){
    
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1g8my4.jpg")
    function generate(){
        const memeImage = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeImage.length)
        const url = memeImage[randomNumber].url
        setMemeImage(url)

    }
    return (
        <main>
            <div className='form-grid'>
        
                <input 
                type='text' 
                className='form-input'
                placeholder='Top Text'
                />
                <input 
                type='text' 
                className='form-input'
                placeholder='Bottom Text'
                />
                <button onClick={generate} className='form-btn'>Get a new meme image 🖼</button>
                <img src={memeImage} alt='memes' className='meme-image'/>
            </div>
      </main>
    )
}