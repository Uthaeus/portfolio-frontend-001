import { useState, useEffect } from "react";


function DrumPad({keyTrigger, id, url, updateDisplay}) {
    const [active, setActive] = useState(false);
    

    const handleKeyPress = (e) => {
        if (e.keyCode === keyTrigger.charCodeAt()) {
            playSound();
        }
    }

    const playSound = () => {
        const sound = document.getElementById(keyTrigger);
        sound.currentTime = 0;
        sound.play();
        setActive(true);
        setTimeout(() => setActive(false), 100);
        updateDisplay(id.replace(/-/g, ' '), keyTrigger);
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    })

    return (
        <div className={`drum-pad ${active ? 'active' : ''}`} id={id} onClick={playSound}>
            <audio className="clip" id={keyTrigger} src={url}></audio>
            {keyTrigger}
        </div>
    )
}

export default DrumPad;