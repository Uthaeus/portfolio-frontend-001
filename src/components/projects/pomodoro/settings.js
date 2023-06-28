import Controls from "./controls";

function Settings({ user, sessionLength, breakLength, mode, timeChangeHandler, modeChangeHandler, isRunning, resetHandler, startStopHandler }) {
  return (
    <div className="settings-wrapper">
      <div className="settings-item-wrapper">
        <div className="settings-item session-item">
          <div className="settings-item-display">
            <p className="settings-item-display-item">{sessionLength}</p>
          </div>

          <div className="settings-item-actions">
            <button className="settings-item-btn" onClick={() => timeChangeHandler('session', 'inc')}>
              +
            </button>
            <button className="settings-item-btn" onClick={() => timeChangeHandler('session', 'dec')}>
              -
            </button>
          </div>
        </div>
      </div>

      <div className="settings-controls-wrapper">
        {user && <p className="settings-user-title">{user.username}'s clock</p>}

        <div className="controls-indicator-wrapper">
          <p className={`indicator session-indicator ${mode === 'session' ? 'indicator-active' : ''}`} />
          <p className="current-mode-label">{mode}</p>
          <p className={`indicator session-indicator ${mode === 'break' ? 'indicator-active' : ''}`} />
        </div>

        <Controls modeChangeHandler={modeChangeHandler} isRunning={isRunning} mode={mode} resetHandler={resetHandler} startStopHandler={startStopHandler} />
      </div>

      <div className="settings-item-wrapper">
        <div className="settings-item break-item">
          <div className="settings-item-actions">
            <button className="settings-item-btn" onClick={() => timeChangeHandler('break', 'inc')}>
              +
            </button>
            <button className="settings-item-btn" onClick={() => timeChangeHandler('break', 'dec')}>
              -
            </button>
          </div>

          <div className="settings-item-display">
            <p className="settings-item-display-item">{breakLength}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
