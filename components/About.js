import React from 'react'
import { useRive, StateMachineInput, useStateMachineInput } from 'rive-react';

let aboutDetail = {
    data1: "Hello, I’m Thanakrit Naprasert. You can call me Peet. I'm graduated from Kasetsart University in Thailand and my major is computer engineering. I tend to make use of modern web technologies to build websites that look great, feel fantastic, and simplify.",
    data2: "I have an interest in using technology to solve problems in real life and in my free time I like to learn the technologies by myself."
}



function About() {

    const STATE_MACHINE_NAME = "window";
    const HOWER_INPUT = "show";
    const CLICK_INPUT = "click";

    const { rive, RiveComponent } = useRive({
        src: 'rive/boy_window.riv',
        stateMachines: 'window',
        autoplay: true
    })

    const onHowerInput = useStateMachineInput(rive, STATE_MACHINE_NAME, HOWER_INPUT);
    const onClickInput = useStateMachineInput(rive, STATE_MACHINE_NAME, CLICK_INPUT);

    return (

        <div className="about" id="about">

            <div className="topic-about">
                <h2>ABOUT ME</h2>
            </div>

            <div
                className="wave-spacer"
                style={{ backgroundImage: `url('/wave_top.svg')` }}
            ></div>

            <div className="about-content">
                <div className="about-wrapper">

                    <div className="boy-window">
                        <RiveComponent onMouseOver={(() => onHowerInput.fire())} onClick={(() => onClickInput.fire())} />
                    </div>
                    <div className="text-about">
                        <p>{aboutDetail.data1}</p>
                        <p>{aboutDetail.data2}</p>
                    </div>

                </div>
            </div>

            <div
                className="wave-spacer"
                style={{ backgroundImage: `url('/wave_bottom.svg')` }}
            ></div>

        </div>
    )
}

export default About
