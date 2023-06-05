import React from 'react'


export default function Meme(){
    
    const [meme, setMeme] = React.useState({
        bottomText: "",
        topText: "",
        randomUrl: "https://i.imgflip.com/1g8my4.jpg"
    })
    
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
             .then(res => res.json())
             .then(data => setAllMemes(data.data.memes))
    }, [])
    
    
    function generateImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomUrl: url
        }))

    }
    function generateText(event){
       const {name, value} = event.target
       setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
       }))
    }
    return (
        <main>
            <div className='form-grid'>
        
                <input 
                type='text' 
                className='form-input'
                placeholder='Top Text'
                name= 'topText'
                value= {meme.topText}
                onChange={generateText}
                />
                <input 
                type='text' 
                className='form-input'
                placeholder='Bottom Text'
                name="bottomText"
                value={meme.bottomText}
                onChange={generateText}
            
                />
                <button onClick={generateImage} className='form-btn'>Get a new meme image 🖼</button>
            </div>    
            <div className="image-text-container">
                <h1 className='meme-text top'>{meme.topText}</h1>
                <h1 className='meme-text bottom'>{meme.bottomText}</h1>
                <img src={meme.randomUrl} alt='memes' className='meme-image'/>
            </div>   
      </main>
    )
}