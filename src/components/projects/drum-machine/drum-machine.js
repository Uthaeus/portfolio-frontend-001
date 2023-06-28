import { useState } from "react";

import DrumPad from "./drum-pad";

const drums = [
    {
        keyTrigger: 'Q',
        id: 'heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyTrigger: 'W',
        id: 'heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyTrigger: 'E',
        id: 'heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyTrigger: 'A',
        id: 'heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyTrigger: 'S',
        id: 'clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyTrigger: 'D',
        id: 'open-hh',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyTrigger: 'Z',
        id: 'kick-n-hat',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyTrigger: 'X',
        id: 'kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyTrigger: 'C',
        id: 'closed-hh',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
]

function DrumMachine() {
    const [display, setDisplay] = useState('');
    const [playbackArr, setPlaybackArr] = useState([]);

    function updateDisplay(text, keyTrigger) {
        setDisplay(text);
        setPlaybackArr([...playbackArr, keyTrigger]);
    }

    function resetHandler() {
        setPlaybackArr([]);
        setDisplay('');
    }

    function playbackHandler() {
        let i = 0;
        const interval = setInterval(() => {
            const sound = document.getElementById(playbackArr[i]);
            sound.parentElement.click();
            sound.currentTime = 0;
            sound.play();
            i++;
            if (i >= playbackArr.length) {
                clearInterval(interval);
            }
        }, 400);
    }

    return (
        <div className="drum-machine-container">
            <h1 className="drum-machine-title">Drum Machine</h1>

            <div className="pads-wrapper">
                {drums.map(drum => (
                    <DrumPad key={drum.id} {...drum} updateDisplay={updateDisplay} />
                ))}
            </div>

            <div className="drum-display-wrapper">
                {playbackArr.length > 0 &&<p className="display">{display}</p>}
                <p className="playback">{playbackArr.join(' ')}</p>
            </div>

            <div className="drum-controls">
                <button onClick={playbackHandler} className="control-btn playback-btn">Playback</button>
                <button onClick={resetHandler} className="control-btn reset-btn">Reset</button>
            </div>
        </div>
    );
}

export default DrumMachine;