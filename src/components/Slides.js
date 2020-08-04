import React, { useState, useEffect } from 'react';

function Slides({slides}) {
    const [curr, setCurr] = useState(0)
    const { length } = slides

    const gotoNext = () => {
        setCurr(curr === length -1 ? 0 : curr+1)
    }

    const gotoPrev = () => {
        console.log(curr)
        setCurr(curr === 0 ? length -1 : curr - 1)
    }

    const restart = () => {
        setCurr(0)
    }

    useEffect(() => {
        setCurr(0)
    }, [])


    return (
        <div>
            <h2>Slide with React Hooks</h2>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" disabled={curr === 0} onClick={() => restart()}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={curr === 0} onClick={() => gotoPrev()}>Prev</button>
                <button data-testid="button-next" className="small" disabled={curr === length-1} onClick={() => gotoNext()}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                { 
                    slides.map((slide, index) => 
                    curr === index && <div key={slide.title} className={curr === index ? 'slide active' : 'slide'}>
                            <h1 data-testid="title">{slide.title}</h1>
                            <p data-testid="text">{slide.text}</p>
                    </div>
                    )
                }
                
            </div>
        </div>
    );

}

export default Slides;
