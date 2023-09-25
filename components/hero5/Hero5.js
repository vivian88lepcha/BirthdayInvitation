import React from 'react'
import TimeCountDown from '../countdown';


const Hero5 = (props) => {
    return (
        <section className="wpo-hero-style-4">
            <div className="wedding-announcement">
                <div className="couple-text">
                    <h2>Ivaan Shynon Lepcha</h2>
                    <p>Is Turning <span>"ONE"</span> On October 21, 2023</p>
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