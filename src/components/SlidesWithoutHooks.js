import React from 'react';

function SlidesWithoutHooks({slides, current, gotoNext, gotoPrev, restart}) {
    const { length } = slides
    return (
        <div>
            <h2>Slide without React Hooks</h2>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" disabled={current === 0} onClick={() => restart()}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={current === 0} onClick={() => gotoPrev(current)}>Prev</button>
                <button data-testid="button-next" className="small" disabled={current === length-1} onClick={() => gotoNext(current)}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                { 
                    slides.map((slide, index) => 
                    current === index && <div key={slide.title} className={current === index ? 'slide active' : 'slide'}>
                            <h1 data-testid="title">{slide.title}</h1>
                            <p data-testid="text">{slide.text}</p>
                    </div>
                    )
                } 
              
                
            </div>
        </div>
    );

}

export default SlidesWithoutHooks;
