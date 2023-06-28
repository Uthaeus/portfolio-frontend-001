
function Display({ time }) {

    function setDisplayTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secondsRemaining = seconds % 60;
        const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const displaySeconds = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
        return `${displayMinutes}:${displaySeconds}`;
    }

  return (
    <div className="display-wrapper">
      <h1 className="display-time">{setDisplayTime(time)}</h1>
    </div>
  );
}

export default Display;