import React from 'react'
import TimeCountDown from '../countdown';


const Hero5 = (props) => {
    return (
        <section className="wpo-hero-style-4">
            <div className="wedding-announcement">
                <div className="couple-text">
                    <h2>Ivaan Shynon Lepcha</h2>
                    <p>Is turning <span>"ONE"</span> on October 21st, 2023 </p>
                    <p className='px-2'>We would like to invite you and your family to be part of this joyous celebration</p> 
                    <div className="wpo-wedding-date">
                        <div className="clock-grids">
                            <TimeCountDown/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero5;